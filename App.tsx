const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProfileSelectScreen from "./screens/ProfileSelectScreen";
import PatientRegisterScreen from "./screens/PatientRegisterScreen";
import MedicalRegisterScreen from "./screens/MedicalRegisterScreen";
import FooterFrame from "./components/FooterFrame";
import InicioDeSesin from "./components/InicioDeSesin";
import InputSelctFieldFrame from "./components/InputSelctFieldFrame";
import FrameComponent from "./components/FrameComponent";
import LoginButtonFrame from "./components/LoginButtonFrame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileSelectScreen"
              component={ProfileSelectScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PatientRegisterScreen"
              component={PatientRegisterScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicalRegisterScreen"
              component={MedicalRegisterScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
