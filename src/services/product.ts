import { apiClient } from "../api/apiClient";
import { ApiResponse } from "../types/responseType";
import { Product } from "../types/product";
export const fetchProducts = async () => {
  try {
    const response = await apiClient.get<ApiResponse<Product>>("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}