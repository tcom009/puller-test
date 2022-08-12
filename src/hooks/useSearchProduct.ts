import { useMemo, useState } from 'react';
import { Product } from '@models/product';

export const useSearchProduct = (products: Array<Product> | []) => {
  const [getByCategory, setGetByCategory] = useState(false);
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredResults] = useState(products);

  useMemo(() => {
    if (products.length !== 0) {
      const result = products.filter((product) => {
        if (!getByCategory) {
          return `${product.title}`.toLowerCase().includes(query.toLowerCase());
        } else {
          if (`${product.category}`.toLowerCase() === query.toLowerCase()) {
            return true;
          }
        }
      });
      setFilteredResults(result);
    }
  }, [products, query, getByCategory]);
  if (!getByCategory) {
    return {
      getByCategory,
      setGetByCategory,
      query,
      setQuery,
      filteredProducts,
    };
  } else {
    return { getByCategory, setGetByCategory, setQuery, filteredProducts };
  }
};

