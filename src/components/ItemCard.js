import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("ItemDetail", { id: item.id })}
      style={{
        height: 250,
        width: "48%",
        backgroundColor: "white",
        borderRadius: 12,
        borderColor: "lightgray",
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flex: 5,

          borderRadius: 12,
          overflow: "hidden",

          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <View
          style={{
            height: 50,
            width: "100%",

            flexDirection: "row",
            gap: 5,
            overflow: "hidden",
            paddingLeft: 5,
            paddingTop: 5,
            alignItems: "center",

            zIndex: 5,
            position: "absolute",
          }}
        >
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          >
            <Image
              style={{ height: "100%", width: "100%" }}
              source={{
                uri: "https://static.vecteezy.com/system/resources/previews/020/911/747/non_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png",
              }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
            {console.log(item)}
            username
          </Text>
        </View>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={{
            uri:
              "https://react-native-mini-project-items.eapi.joincoded.com/" +
              item.image,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "red" }}>
          {item.price} KD
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemCard;
