const categories = document.querySelectorAll(".item");
const categoriesQuantity = `Number of categories: ${categories.length}`;
console.log(categoriesQuantity);

for (const category of categories) {
  const heading = document.querySelector("h2");
  const categoryName = `Category: ${heading.textContent}`;
  console.log(categoryName);

  const subCategories = category.querySelectorAll("li");
  const subCategoriesQuantity = `Elements: ${subCategories.length}`;
  console.log(subCategoriesQuantity);
}
