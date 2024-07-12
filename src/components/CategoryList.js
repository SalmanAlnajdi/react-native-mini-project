import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryItem from "./CategoryItem";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../apis/categories";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        height: 75,
        alignItems: "center",

        paddingHorizontal: 5,
        flexDirection: "row",
        gap: 8,
      }}
    >
      {data?.map((category) => {
        return <CategoryItem key={category.id} name={category.name} />;
      })}
    </ScrollView>
  );
};

export default CategoryList;
