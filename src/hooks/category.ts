import { fetchProductCategory } from "../services/product";
import { useQuery } from "@tanstack/react-query";
import { Category } from "../types/category";

export const useProductCategory = () => {
    return useQuery<Category[]>({
        queryKey: ["productCategories"],
        queryFn: fetchProductCategory
    })
}