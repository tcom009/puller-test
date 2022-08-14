import { useRouter } from 'next/router';
import { Product } from '@models/product';
import React from 'react';
import NoProducts from 'components/NoProducts';
interface ProductCardsProps {
  products: Array<Product>;
}
const ProductCards = (props: ProductCardsProps) => {
  const { products } = props;

  if (products.length !== 0) {
    return (
      <div className='product-container'>
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <Card product={product} key={product.id} />
            </React.Fragment>
          );
        })}
      </div>
    );
  } else {
    return <NoProducts />;
  }
};

interface CardProps {
  product: Product;
}

const Card = (props: CardProps) => {
  const { product } = props;

  const router = useRouter();
  return (
    <div className='product-card'>
      <div className='centered-div'>
        <img src={product.image} alt={product.title} className='image' />
        <div style={{ marginTop: '10px' }}></div>
        <div className=' product-description-container'>
          <div className='product-title'>{product.title}</div>
          <div className='product-price'>{`$${product.price}`}</div>
        </div>
        <div style={{ margin: '3px' }}>
          <button
            className='see-details-button'
            onClick={() => router.push(`/product/${product.id}`)}
          >
            See details
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCards;
