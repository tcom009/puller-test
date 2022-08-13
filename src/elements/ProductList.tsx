import axios from 'axios';
import { Product } from 'models/product';
import { useReducer, useEffect } from 'react';
import { ActionTypes, ProductListReducer } from 'actions/productList';
import SearchBox from '@components/SearchBox';
import { useSearchProduct } from 'hooks/useSearchProduct';
import ProductCards from 'components/ProductCards';
import config from 'config';
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
  const setLoading = (state: boolean) => {
    dispatch({
      type: ActionTypes.SET_LOADING,
      payload: {
        loading: state,
      },
    });
  };
  useEffect(() => {
    if (query !== '') {
      dispatch({
        type: ActionTypes.SET_SHOWING_PRODUCTS,
        payload: {
          showingProducts: filteredProducts,
        },
      });
    }
  }, [filteredProducts, query]);

  const getByCategory = (category: string) => {
    setLoading(true);
    axios
      .get(`${config.BASE_URL}/products/category/${category}`)
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: ActionTypes.SET_SHOWING_PRODUCTS,
          payload: {
            showingProducts: response.data,
          },
        });
      });
    setLoading(false);
  };
  const getAllProducts = () => {
    setLoading(true);
    axios.get(`${config.BASE_URL}/products/`).then((response) => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.SET_SHOWING_PRODUCTS,
        payload: {
          showingProducts: response.data,
        },
      });
    });
    setLoading(false);
  };

  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div className='banner'>
        <h1
          style={{
            width: '100%',
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
          {state.categories &&
            state.categories.map((category: string, index) => {
              return (
                <>
                  <button
                    key={index}
                    onClick={() => {
                      getByCategory(category);
                    }}
                    className='category-button'
                  >
                    {capitalize(category)}
                  </button>
                </>
              );
            })}
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
