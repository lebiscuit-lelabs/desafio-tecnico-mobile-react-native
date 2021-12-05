import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { CartProvider } from "./src/hooks/Cart";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1, paddingTop: 40 }}>
        <NavigationContainer>
          <CartProvider>
            <Routes />
          </CartProvider>
        </NavigationContainer>
      </View>
    </>
  );
}
