import config from 'config';
import axios from 'axios';
import { Product } from 'models/product';
import { useEffect, useState } from 'react';

interface State {
  products: Array<Product> | undefined;
  categories: Array<string> | undefined;
  loading: boolean;
}

const ProductList = () => {
  const [state, setState] = useState<State>({
    products: [],
    categories: [],
    loading: false,
  });
  useEffect(() => {
    const getCategories = axios.get(`${config.BASE_URL}/products/categories/`);
    const getProducts = axios.get(`${config.BASE_URL}/products`);

    Promise.all([getProducts, getCategories]).then((response) => {
      setState({
        categories: response[1].data,
        products: response[0].data,
        loading: false,
      });
      console.log(response[0].data);
      console.log(response[1].data);
    });
  }, []);

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
    </>
  );
};

export default ProductList;
