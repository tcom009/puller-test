import { Product } from '@models/product';
import Image from 'next/image';

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
            <>
              <Card product={product} key={product.id} />
            </>
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
    <div style={{ display: 'flex' }}>
      <Image src={product.image} alt={product.title} width={200} height={200} />
      <div>{product.title}</div>
    </div>
  );
};
export default ProductCards;
