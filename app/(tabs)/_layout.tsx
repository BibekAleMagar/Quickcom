import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <SafeAreaView className="flex-1 px-2">
      <Tabs>
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
        <Tabs.Screen name="search" options={{ title: "Search" }} />
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      </Tabs>
    </SafeAreaView>
  );
}
