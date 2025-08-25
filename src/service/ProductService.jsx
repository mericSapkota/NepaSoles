import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, productData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return productId;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const getReviewsByProductId = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}/reviews`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const addReviewToProduct = async (productId, reviewData) => {
  try {
    const response = await axios.post(`${API_URL}/${productId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const getTrendingProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/trending`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending products:", error);
    throw error;
  }
};

export const setTrendingProducts = async (productId) => {
  try {
    const response = await axios.post(`${API_URL}/trending`, { productId });
    return response.data;
  } catch (error) {
    console.error("Error setting trending products:", error);
    throw error;
  }
};
