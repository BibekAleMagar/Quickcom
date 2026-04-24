import { useState } from "react";
import PagerView from "react-native-pager-view";
import { Image, View } from "react-native";

const slides = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1512499617640-c2f999feae9e?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=60",
];

export default function Slider() {
  const [activePage, setActivePage] = useState(0);

  return (
    <View className="rounded-2xl overflow-hidden">
      <PagerView
        style={{ height: 200 }}
        initialPage={0}
        onPageSelected={(e) => setActivePage(e.nativeEvent.position)}
      >
        {slides.map((uri, index) => (
          <View key={index} className="flex-1">
            <Image
              source={{ uri }}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
              className="rounded-2xl"
            />
          </View>
        ))}
      </PagerView>

      <View className="flex-row justify-center gap-x-2 mt-3">
        {slides.map((_, index) => (
          <View
            key={index}
            className={`h-2 rounded-full ${
              activePage === index ? "w-2 bg-slate-900" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
}
