import get from 'lodash/get';
import axios from 'axios';
import config from '@config';
import Image from 'next/image';
import { Product as ProductModel } from 'models/product';
import Head from 'next/head';
import BackButton from '@components/BackButton';
interface ProductProps {
  data: ProductModel;
}
const Product = (props: ProductProps) => {
  const {
    data: { title, category, price, image },
  } = props;

  return (
    <>
      <Head>
        <title>
          {config.PROJECT} - {title}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container flex-col'>
        {/* Image setion */}
        <div style={{ marginTop: '20px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='product-image'>
            <BackButton size={35} />
            <img src={image} alt={title} className='image-detail' />
          </div>
        </div>
        {/* Description section */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='product-description'>
            <h2>{title}</h2>

            <div className='product-price-detail'>{`$${price}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

export const getServerSideProps = async (context: any) => {
  const productId = get(context, 'query.id', '');
  const response = await axios.get(`${config.BASE_URL}/products/${productId}`);
  return {
    props: {
      data: response?.data || {},
    },
  };
};
