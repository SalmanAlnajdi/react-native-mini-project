import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../apis/items";

const ItemList = () => {
  const { data } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 15,
        paddingBottom: 100,
        gap: 10,
        flexGrow: 1,
        flexWrap: "wrap",
        flexDirection: "row",
      }}
    >
      {data?.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </ScrollView>
  );
};

export default ItemList;
