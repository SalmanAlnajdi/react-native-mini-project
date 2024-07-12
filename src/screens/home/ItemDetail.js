import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getItemById } from "../../apis/items";

const ItemDetail = ({ id }) => {
  const { data } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItemById(id),
  });
  return (
    <View>
      <Text>{data?.name}</Text>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({});
