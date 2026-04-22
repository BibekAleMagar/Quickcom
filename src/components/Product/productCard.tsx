import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Product } from "@/src/types/product";
import { Star, Plus } from "lucide-react-native";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => router.push(`/`)}
      className="flex-1 bg-white m-2 rounded-[24px] overflow-hidden border border-gray-100 shadow-sm"
    >
      {/* Top Image Section */}
      <View className="relative bg-[#F3F4F6] items-center justify-center p-4">
        {item.discountPercentage > 0 && (
          <View className="absolute top-2 left-2 bg-red-500 px-2 py-1 rounded-full z-10">
            <Text className="text-white text-[10px] font-bold">
              -{Math.round(item.discountPercentage)}%
            </Text>
          </View>
        )}

        <Image
          source={{ uri: item.thumbnail }}
          style={{ width: "100%", height: 120 }}
          resizeMode="contain"
        />
      </View>

      {/* Details Section */}
      <View className="p-3">
        <Text className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
          {item.brand || item.category}
        </Text>

        <Text
          className="text-slate-900 font-semibold text-[14px] mt-0.5"
          numberOfLines={1}
        >
          {item.title}
        </Text>

        {/* Rating Row */}
        <View className="flex-row items-center mt-1">
          <Star size={10} color="#f59e0b" fill="#f59e0b" />
          <Text className="text-amber-700 text-[11px] font-bold ml-1">
            {item.rating}
          </Text>
        </View>

        {/* Footer: Price and Add Button */}
        <View className="flex-row items-center justify-between mt-3">
          <Text className="text-slate-900 font-black text-[16px]">
            ${item.price.toFixed(2)}
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            className="bg-slate-900 w-8 h-8 rounded-full items-center justify-center"
            onPress={() => console.log("Added to cart:", item.title)}
          >
            <Plus size={18} color="white" strokeWidth={3} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
