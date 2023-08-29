import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH;

axios.defaults.headers.common = {
  "X-API-KEY": API_KEY,
};

const instanse = axios.create({
  baseURL: API_BASE_PATH,
});

export const getCategories = async () => {
  const response = await instanse.get("/api/v1/category/parent");
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await instanse.get(`/api/v1/category/child?parent_id=${id}`);
  return response.data;
};
