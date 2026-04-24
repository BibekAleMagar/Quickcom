import { FlatList, Text, View } from "react-native";
import { fetchProducts } from "@/src/services/product";
import { useEffect, useState } from "react";
import { Product } from "@/src/types/product";
import ProductCard from "@/src/components/Product/productCard";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products[0]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <View className="flex">
      <Text className="text-2xl font-bold">Products Screen</Text>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({ item }) => <ProductCard item={item} />}
        // className="bg-red-600"
      />
      <Text className="text-center text-gray-500 mt-4">
        End of product list
      </Text>
    </View>
  );
}
