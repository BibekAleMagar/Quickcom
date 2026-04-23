import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import { loginSchema } from "@/src/schema/loginSchema";
import { LoginData } from "@/src/types/auth/login";
import { useLogin } from "@/src/hooks/auth";
import { useAuth } from "@/src/context/authContext";

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setUser } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const { mutateAsync, isPending, error } = useLogin();

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await mutateAsync(data);
      setUser(res);
      router.replace("/(tabs)");
    } catch {
      // Error is already handled in useLogin's onError
      // Do nothing here — just prevent unhandled rejection
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
          <View className="mt-12 mb-10">
            <Text className="text-4xl font-bold text-slate-900">
              Welcome Back
            </Text>
            <Text className="text-lg text-slate-500 mt-2">
              Log in to your Quickcom account
            </Text>
          </View>

          <View className="gap-y-5">
            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">
                User Name
              </Text>
              <Controller
                control={control}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center h-14 px-4 bg-slate-50 rounded-2xl border ${errors.username ? "border-red-500" : "border-slate-200"}`}
                  >
                    <Mail size={20} color="#94a3b8" />
                    <TextInput
                      className="flex-1 h-full ml-3 text-slate-900"
                      placeholder="email@example.com"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      autoCapitalize="none"
                      keyboardType="email-address"
                    />
                  </View>
                )}
              />
              {errors.username && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.username.message}
                </Text>
              )}
            </View>

            <View>
              <Text className="text-slate-700 font-semibold mb-2 ml-1">
                Password
              </Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <View
                    className={`flex-row items-center h-14 px-4 bg-slate-50 rounded-2xl border ${errors.password ? "border-red-500" : "border-slate-200"}`}
                  >
                    <Lock size={20} color="#94a3b8" />
                    <TextInput
                      className="flex-1 h-full ml-3 text-slate-900"
                      placeholder="••••••••"
                      secureTextEntry={!showPassword}
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff size={20} color="#94a3b8" />
                      ) : (
                        <Eye size={20} color="#94a3b8" />
                      )}
                    </TouchableOpacity>
                  </View>
                )}
              />
              {errors.password && (
                <Text className="text-red-500 text-xs mt-1 ml-1">
                  {errors.password.message}
                </Text>
              )}
              {error && (
                <Text className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-xl mt-4">
                  {(error as any)?.response?.data?.message ??
                    "Invalid credentials. Please try again."}
                </Text>
              )}
            </View>

            <TouchableOpacity className="items-end">
              <Text className="text-blue-600 font-medium">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              disabled={isPending}
              className={`h-14 rounded-2xl items-center justify-center mt-4 ${isPending ? "bg-slate-400" : "bg-slate-900"}`}
            >
              <Text className="text-white font-bold text-lg">
                {isPending ? "Signing in..." : "Sign In"}
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-auto mb-8 flex-row justify-center">
            <Text className="text-slate-500">Don't have an account? </Text>
            <TouchableOpacity>
              <Text className="text-blue-600 font-bold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
