import { Product } from 'models/product';
import { useReducer, useEffect } from 'react';
import { ProductListReducer } from 'actions/productList';
import SearchBox from '@components/SearchBox';
import { useSearchProduct } from 'hooks/useSearchProduct';

interface ProductListProps {
  data: {
    products: Array<Product>;
    categories: Array<string>;
  };
}
const ProductList = (props: ProductListProps) => {
  const {
    data: { products, categories },
  } = props;
  const [state, dispatch] = useReducer(ProductListReducer, {
    products: products,
    categories: categories,
    loading: false,
  });
  const { query, setQuery, filteredProducts } = useSearchProduct(
    state.products
  );

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
      <SearchBox query={query} setQuery={setQuery} />
      {state.categories &&
        state.categories.map((category: string) => {
          return (
            <>
              <h3>{category}</h3>
            </>
          );
        })}
      <h2>Product list</h2>
      {filteredProducts.length !== 0 ? (
        <List products={filteredProducts} />
      ) : (
        <List products={state.products} />
      )}
    </>
  );
};

export default ProductList;

const List = (props: any) => {
  return (
    <ul>
      {props.products &&
        props.products.map((product: Product) => (
          <li key={product.id}>{product.title}</li>
        ))}
    </ul>
  );
};