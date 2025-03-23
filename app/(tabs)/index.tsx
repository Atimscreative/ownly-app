import CryptoNFTTabs from "@/components/home/CryptoNFTTab";
import UserActions from "@/components/home/UserActions";
import UserBalance from "@/components/home/UserBalance";
import {
  sent,
  buy,
  receive,
  sell,
  trendingUp,
  arrowDown,
  search,
  plus,
} from "@/constants/icons";
import { userAvatar } from "@/constants/images";
import { COLORS } from "@/constants/theme";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 32,
        }}
      >
        <View style={{}}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Image
              source={userAvatar}
              resizeMode="contain"
              style={{ width: 24, height: 24, borderRadius: 50 }}
              width={40}
              height={40}
            />
            <Text style={{ color: "#fff", fontSize: 16 }}>SmartyVic</Text>
            <Image
              source={arrowDown}
              resizeMode="contain"
              style={{ width: 24, height: 24, borderRadius: 50 }}
              width={40}
              height={40}
            />
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Image
              source={search}
              resizeMode="contain"
              style={{ width: 24, height: 24, borderRadius: 50 }}
              width={40}
              height={40}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
          >
            <Image
              source={plus}
              resizeMode="contain"
              style={{ width: 24, height: 24, borderRadius: 50 }}
              width={40}
              height={40}
            />
          </TouchableOpacity>
        </View>
      </View>

      <UserBalance />
      <UserActions />
      <CryptoNFTTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "flex-start",
  },
  searchBtn: {
    width: 50,
    height: "100%",
    // backgroundColor: COLORS.tertiary,
    // borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
  },
});
