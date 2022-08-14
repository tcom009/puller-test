interface CategoriesProps {
  categories: Array<string>;
  getByCategory: Function;
}

const Categories = (props: CategoriesProps) => {
  const { categories, getByCategory } = props;
  const capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <>
      {categories &&
        categories.map((category: string, index) => {
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
    </>
  );
};

export default Categories;
