import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CategoryItem = ({ name }) => {
  return (
    <View
      style={{
        minWidth: 100,
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor: "lightgray",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{name}</Text>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
