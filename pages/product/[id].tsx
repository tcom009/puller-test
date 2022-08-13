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

      {/* Image setion */}
      <div className='centered-div'>
        <div className='product-image'>
          <BackButton size={30} />
          <img src={image} alt={title} style={{ height: '30%' }} />
        </div>
      </div>
      {/* Description section */}
      <div className='centered-div'>
        <div className='product-description'>
          <h1 className='product-title-detail'>{title}</h1>

          <div className='product-price-detail'>{`$${price}`}</div>
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
