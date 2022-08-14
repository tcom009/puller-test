import { useMemo, useState } from 'react';
import { Product } from '@models/product';

export const useSearchProduct = (products: Array<Product> | []) => {
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredResults] = useState(products);

  useMemo(() => {
    if (products.length !== 0) {
      const result = products.filter((product) => {
        return `${product.title}`.toLowerCase().includes(query.toLowerCase());
      });
      setFilteredResults(result);
    }
  }, [products, query]);
  return {
    query,
    setQuery,
    filteredProducts,
  };
};

