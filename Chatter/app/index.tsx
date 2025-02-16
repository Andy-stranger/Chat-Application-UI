import { Button, Text, View } from "react-native";
import LoginPage from "./login/login";
import CreateAccountPage from "./create account/createAccount";
import ChangePasswordPage from "./forget password/forgetPassword";
import DashboardPage from "./dashboard/dashboard";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  return (
    <View>
      <DashboardPage></DashboardPage>
    </View>
  );
}
