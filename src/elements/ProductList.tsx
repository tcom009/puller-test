import { Product } from 'models/product';
import { useReducer } from 'react';
import { ProductListReducer } from 'actions/productList';

const ProductList = (props: any) => {
  const { data } = props;
  const [state, dispatch] = useReducer(ProductListReducer, {
    ...data,
    loading: false,
  });
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ width: 'full' }}>Sample text</h1>
      </div>
      {state.categories &&
        state.categories.map((category: string) => {
          return (
            <>
              <h3>{category}</h3>
            </>
          );
        })}
      <h2>Product list</h2>
      <ul>
        {state.products &&
          state.products.map((product: Product) => (
            <li key={product.id}>{product.title}</li>
          ))}
      </ul>
    </>
  );
};

export default ProductList;
