import React from 'react';

interface CategoriesProps {
  categories: Array<string>;
  getByCategory: Function;
}

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const Categories = (props: CategoriesProps) => {
  const { categories, getByCategory } = props;
  return (
    <>
      {categories &&
        categories.map((category: string, index) => {
          return (
            <React.Fragment key={index}>
              <button
                key={index}
                onClick={() => {
                  getByCategory(category);
                }}
                className='category-button'
              >
                {capitalize(category)}
              </button>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Categories;
