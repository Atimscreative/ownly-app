import { trendingUp } from "@/constants/icons";
import React from "react";
import { Image, Text, View } from "react-native";

export default function UserBalance() {
  return (
    <View style={{ width: "100%", marginBottom: 32 }}>
      <Text
        style={{
          color: "#fff",
          fontSize: 44,
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        $0.00
      </Text>
      <View
        style={{
          width: "100%",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Image
          source={trendingUp}
          resizeMode="contain"
          style={{
            width: 24,
            height: 24,
            tintColor: "#99FF94",
          }}
        />
        <Text
          style={{
            color: "#99FF94",
            fontSize: 14,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          +25.05%
        </Text>
      </View>
    </View>
  );
}
