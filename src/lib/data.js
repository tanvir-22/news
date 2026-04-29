export const getCategories = async () => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/categories`,
  );
  const data = await response.json();
  return data;
};

export const getNewsByCategory = async (category_id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await response.json();
  return data;
};
export const getNewsById = async (id) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/${id}`,
  );
  const data = await response.json();
  return data;
};
