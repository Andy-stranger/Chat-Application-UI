import { Button, Text, View } from "react-native";
import LoginPage from "./login.js";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <LoginPage></LoginPage>
    </View>
  );
}
