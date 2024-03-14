import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import MainPage from "./src/components/views/MainPage";
import { AuthProvider } from "./src/AuthContext";

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Logowanie" }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: "Rejestracja" }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ title: "Strona główna" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
