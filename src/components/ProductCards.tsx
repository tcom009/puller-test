import { Product } from '@models/product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardsProps {
  products: Array<Product>;
}
const ProductCards = (props: ProductCardsProps) => {
  const { products } = props;
  if (products.length !== 0) {
    return (
      <div>
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
    return <div>Sorry there are not products matching</div>;
  }
};

interface CardProps {
  product: Product;
}

const Card = (props: CardProps) => {
  const { product } = props;
  return (
    <div style={{ width: '300px' }}>
      <Link href={`/product/${product.id}`}>
        <div>
          <img src={product.image} alt={product.title} className='image' />

          <div>{product.title}</div>
          <p>{product.category}</p>
        </div>
      </Link>
    </div>
  );
};
export default ProductCards;
