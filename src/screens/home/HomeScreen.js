import { Text, View } from "react-native";
import React from "react";
import CategoryList from "../../components/CategoryList";
import ItemList from "../../components/ItemList";

const HomeScreen = () => {
  return (
    <View>
      <CategoryList />
      <ItemList />
    </View>
  );
};

export default HomeScreen;
