import { View, Text, Image } from "react-native";
import { useAuth } from "@/src/context/authContext";
export default function Header() {
  const { user } = useAuth();
  return (
    <View className="w-full mb-4 ">
      <View className="flex-row items-center">
        <Image
          source={{ uri: user?.image }}
          //   style={{ width: 50, height: 50, borderRadius: 50 }}
          className="rounded-full h-14 w-14 border border-gray-300"
        />
        <View className="ml-4">
          <Text className="text-lg font-bold">Hi! {user?.firstName}</Text>
          <Text className="text-sm text-gray-400">Let's go shopping!</Text>
        </View>
      </View>
    </View>
  );
}
