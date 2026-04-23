import { Redirect, Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "@/src/context/authContext";
import { View, Text, TouchableOpacity } from "react-native";
import { Lock } from "lucide-react-native";
import { useRouter } from "expo-router";
import Header from "@/src/components/home/header";

export default function TabLayout() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    return (
      <View className="flex-1 items-center justify-center bg-white px-10">
        <View className="bg-red-50 p-6 rounded-full mb-6">
          <Lock size={48} color="#ef4444" />
        </View>

        <Text className="text-2xl font-bold text-slate-900 text-center">
          Not Authenticated
        </Text>

        <Text className="text-slate-500 text-center mt-2 mb-8">
          You need to be logged in to access your cart, profile, and orders.
        </Text>

        <TouchableOpacity
          onPress={() => router.replace("/login")}
          className="bg-slate-900 w-full h-14 rounded-2xl items-center justify-center shadow-lg"
        >
          <Text className="text-white font-bold text-lg">Go to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 px-4 py-2">
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            header: () => <Header />,
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: "Products",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="product" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
