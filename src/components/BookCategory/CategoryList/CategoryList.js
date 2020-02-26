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

const CategoryList = props => {
  const categories = useCategoryHook();
  console.log(categories);

  const sortedCategories = SortCategories(categories);
  return (
    <React.Fragment>
      {!sortedCategories && <div>Loading Categories...</div>}
      {sortedCategories && (
        <ul className="categories-list">
          {sortedCategories.map(category => {
            return (
              <CategoryListItem
                key={categories.id}
                category={category}
                onCategoryClicked={props.onCategoryClicked}
              />
            );
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
export default CategoryList;
