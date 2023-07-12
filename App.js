import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

// Imports
import Routes from "./src/routes/Routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"#599c7b"}
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
}
