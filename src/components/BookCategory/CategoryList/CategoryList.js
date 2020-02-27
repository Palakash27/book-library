import React from "react";
import CategoryListItem from "./CategoryListItem";
import useCategoryHook from "../useCategoryHook";

const SortCategories = categories => {
  let newCategories = [];
  if (categories != null) {
    categories.forEach(category => {
      newCategories.push(category.name);
    });
  }

  return newCategories.sort();
};

const CategoryList = () => {
  const categories = useCategoryHook();
  const sortedCategories = SortCategories(categories);

  return (
    <React.Fragment>
      {!sortedCategories && <div>Loading Categories...</div>}
      {sortedCategories && (
        <ul className="categories-list">
          {sortedCategories.map((category, index) => {
            return <CategoryListItem key={index} category={category} />;
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
export default CategoryList;
