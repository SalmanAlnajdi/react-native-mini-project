import instance from "../index"

const getAllCategories = async () => {
  const { data } = await instance.get("/mini-project/api/categories/");
  return data;
};

export { getAllCategories };
