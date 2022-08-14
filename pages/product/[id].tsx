import get from 'lodash/get';
import axios from 'axios';
import config from '@config';
import Categories from '@components/Categories';
import { Product as ProductModel } from 'models/product';
import Head from 'next/head';
import BackButton from '@components/BackButton';
import StarRatings from 'react-star-ratings';
import { useRouter } from 'next/router';
interface ProductProps {
  data: { product: ProductModel; categories: Array<string> };
}
const Product = (props: ProductProps) => {
  const router = useRouter();
  const {
    data: {
      product: {
        title,
        description,
        price,
        image,
        rating: { rate, count },
      },
      categories,
    },
  } = props;
  const getByCategory = (category: string) => {
    router.push(`/category/${category}`);
  };
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
            <p>{description}</p>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <StarRatings
                rating={rate}
                numberOfStars={5}
                starRatedColor={'#24A19C'}
                starEmptyColor={'#888888'}
                starDimension='35px'
                starSpacing='1px'
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              This product is rated {rate} out of {count} reviews!
            </div>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
              }}
            >
              <Categories
                categories={categories}
                getByCategory={getByCategory}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '40px' }}></div>
    </>
  );
};

export default Product;

export const getServerSideProps = async (context: any) => {
  const productId = get(context, 'query.id', '');
  const getCategories = await axios.get(
    `${config.BASE_URL}/products/categories/`
  );
  const getProduct = await axios.get(
    `${config.BASE_URL}/products/${productId}`
  );
  console.debug(getProduct.data);
  return {
    props: {
      data: { product: getProduct?.data, categories: getCategories?.data },
    },
  };
};
