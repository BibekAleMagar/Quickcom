import { View, Text } from "react-native";
import { ShoppingBag, Heart, Search, Truck } from "lucide-react-native";
import { Slide } from "@/src/types/slider";
import AppIntroSlider from "react-native-app-intro-slider";
import { useRouter } from "expo-router";

const StyledBag = ShoppingBag;
const StyledTruck = Truck;

const slides: Slide[] = [
  {
    key: "1",
    title: "Premium Collection",
    text: "Top quality products for your daily needs.",
    bg: "#6366f1",
  },
  {
    key: "2",
    title: "Fast Shipping",
    text: "Express delivery to your doorstep.",
    icon: <StyledTruck className="text-white" size={80} strokeWidth={1.5} />,
    bg: "#10b981",
  },
];

export default function OnboardingSlider() {
  const router = useRouter();
  const renderItem = ({ item }: { item: Slide }) => (
    <View
      style={{ backgroundColor: item.bg }}
      className="flex-1 items-center justify-center p-10"
    >
      {item.icon && (
        <View className="mb-10 bg-white/20 p-8 rounded-full">{item.icon}</View>
      )}
      <Text className="text-white text-3xl font-bold text-center">
        {item.title}
      </Text>
      <Text className="text-white text-center mt-4 opacity-80">
        {item.text}
      </Text>
    </View>
  );

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={() => router.replace("/login")}
    />
  );
}
