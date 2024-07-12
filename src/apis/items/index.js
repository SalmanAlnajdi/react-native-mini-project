import instance from "..";

const getAllItems = async () => {
  const { data } = await instance.get("/mini-project/api/items");
  return data;
};

const getItemById = async (id) => {
  const { data } = await instance.get(`/mini-project/api/items/${id}`);
  return data;
};

export { getAllItems, getItemById };
