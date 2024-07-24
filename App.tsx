const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProfileSelectScreen from "./screens/ProfileSelectScreen";
import PatientRegisterScreen from "./screens/PatientRegisterScreen";
import MedicalRegisterScreen from "./screens/MedicalRegisterScreen";
import LoginScreen from "./screens/LoginScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
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
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <LoginScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
