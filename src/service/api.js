import axios from "axios";

axios.defaults.headers.common = {
  "X-API-KEY":
    "f308fda99e25d0fcc71eaea90a0385ce055b0719a640175b505544e087c3c839",
};

const instanse = axios.create({
  baseURL: "http://api.sellspot.com.ua:8080",
});

export const getCategories = async () => {
  const response = await instanse.get("/api/v1/category/parent");
  return response.data;
};
