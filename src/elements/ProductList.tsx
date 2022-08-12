import { Product } from 'models/product';
import { useReducer, useEffect } from 'react';
import { ActionTypes, ProductListReducer } from 'actions/productList';
import SearchBox from '@components/SearchBox';
import { useSearchProduct } from 'hooks/useSearchProduct';
import ProductCards from 'components/ProductCards';
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
    showingProducts: products,
    loading: false,
  });
  const { query, setQuery, filteredProducts } = useSearchProduct(
    state.products
  );
  useEffect(() => {
    if (query !== '') {
      dispatch({
        type: ActionTypes.SET_SHOWING_PRODUCTS,
        payload: { showingProducts: filteredProducts },
      });
    } else {
      dispatch({
        type: ActionTypes.SET_SHOW_ALL_PRODUCTS,
      });
    }
  }, [filteredProducts, query]);
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
      <ProductCards products={state.showingProducts} />
    </>
  );
};

export default ProductList;

