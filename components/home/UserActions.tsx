import { buy, receive, sell, sent } from "@/constants/icons";
import { COLORS } from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserActions() {
  return (
    <View style={styles.actionWrapper}>
      {actions.map((item) => (
        <TouchableOpacity key={item.title} style={styles.action}>
          <Image
            source={item.icon}
            style={styles.actionIcon}
            resizeMode="contain"
          />
          <Text style={styles.actionText}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  actionWrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  action: {
    width: "100%",
    backgroundColor: COLORS.container,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBlock: 16,
    paddingInline: 20,
    alignSelf: "flex-start",
  },
  actionIcon: {
    width: 24,
    height: 24,
    // tintColor: COLORS.white,
  },
  actionText: {
    color: "#fff",
    fontSize: 10,
    marginTop: 10,
  },
});

const actions = [
  {
    icon: sent,
    title: "Sent",
  },
  {
    icon: receive,
    title: "Receive",
  },
  {
    icon: buy,
    title: "Buy",
  },
  {
    icon: sell,
    title: "Sell",
  },
];
