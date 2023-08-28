import axios from "axios";

axios.defaults.headers.common = {
  "X-API-KEY":
    "f308fda99e25d0fcc71eaea90a0385ce055b0719a640175b505544e087c3c839",
};

const instanse = axios.create({
  baseURL: "https://api.sellspot.com.ua",
});

export const getCategories = async () => {
  const response = await instanse.get("/api/v1/category/parent");
  return response.data;
};

export const getCategoryById = async (id) => {
  const response = await instanse.get(`/api/v1/category/child?parent_id=${id}`);
  return response.data;
};
