interface CategoriesProps {
  categories: Array<string>;
}

const Categories = (props: CategoriesProps) => {
  const { categories } = props;
  return (
    <>
      {' '}
      {categories.map((category, index) => {
        return <CategoryBadge category={category} key={index} />;
      })}
    </>
  );
};

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge = (props: CategoryBadgeProps) => {
  const { category } = props;
  return (
    <div>
      <button>{category}</button>
    </div>
  );
};

export default Categories;
