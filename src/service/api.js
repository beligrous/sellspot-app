import axios from "axios";

const instanse = axios.create({
  baseURL: "http://api.sellspot.com.ua:8080",
  params: {
    apiKey: "f308fda99e25d0fcc71eaea90a0385ce055b0719a640175b505544e087c3c839",
  },
});

export const getCategories = async () => {
  const response = await instanse.get("/api/v1/category/parent");
  return response.data;
};
