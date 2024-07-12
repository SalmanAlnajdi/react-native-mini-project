import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/navigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </View>
    </QueryClientProvider>
  );
}
