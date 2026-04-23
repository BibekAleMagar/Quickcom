import { View, Text, Image } from "react-native";
import { useAuth } from "@/src/context/authContext";
export default function Header() {
  const { user } = useAuth();
  return (
    <View className="w-full shadow-xl">
      <View className="flex-row items-center">
        <Image
          source={{ uri: user?.image }}
          style={{ width: 50, height: 50 }}
          className="rounded-full"
        />
        <View className="ml-4">
          <Text className="text-lg font-bold">
            Hi! {user?.firstName} {user?.lastName}
          </Text>
          <Text className="text-sm text-gray-400">Let's go shopping!</Text>
        </View>
      </View>
    </View>
  );
}
