import axios from 'axios';
import { Product } from 'models/product';
import { useReducer, useEffect } from 'react';
import { ActionTypes, ProductListReducer } from 'actions/productList';
import SearchBox from '@components/SearchBox';
import { useSearchProduct } from 'hooks/useSearchProduct';
import ProductCards from 'components/ProductCards';
import config from 'config';
import Categories from '@components/Categories';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const initialState = {
    products: products,
    categories: categories,
    showingProducts: products,
    loading: false,
  };

  const [state, dispatch] = useReducer(ProductListReducer, initialState);
  const { query, setQuery, filteredProducts } = useSearchProduct(
    state.products
  );

  useEffect(() => {
    if (query !== '') {
      dispatch({
        type: ActionTypes.SET_SHOWING_PRODUCTS,
        payload: {
          showingProducts: filteredProducts,
        },
      });
    } else {
      dispatch({ type: ActionTypes.SET_SHOW_ALL_PRODUCTS });
    }
  }, [filteredProducts, query]);

  const getByCategory = (category: string) => {
    axios
      .get(`${config.BASE_URL}/products/category/${category}`)
      .then((response) => {
        setQuery('');
        dispatch({
          type: ActionTypes.SET_SHOWING_PRODUCTS,
          payload: {
            showingProducts: response.data,
          },
        });
        dispatch({
          type: ActionTypes.SET_PRODUCTS,
          payload: {
            products: response.data,
          },
        });
      });
  };

  const getAllProducts = () => {
    router.push('/');
  };

  return (
    <div>
      <div className='banner'>
        <h1
          style={{
            width: '100%',
            marginLeft: '20px',
            fontSize: '50px',
            fontWeight: '800',
          }}
        >
          My Store
        </h1>

        <div
          style={{
            width: '100%',
          }}
        >
          <SearchBox query={query} setQuery={setQuery} />
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <Categories categories={categories} getByCategory={getByCategory} />
          <button
            onClick={() => {
              getAllProducts();
            }}
            className='category-button'
          >
            {'Show All'}
          </button>
        </div>
      </div>

      <ProductCards products={state.showingProducts} />
    </div>
  );
};

export default ProductList;
