import { COLORS } from "@/constants/theme";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CryptoNFTTabs = () => {
  const [activeTab, setActiveTab] = useState("crypto");

  return (
    <View style={styles.container}>
      {/* Tab Switcher */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "crypto" && styles.activeTab]}
          onPress={() => setActiveTab("crypto")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "crypto" && styles.activeText,
            ]}
          >
            Crypto
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "nft" && styles.activeTab]}
          onPress={() => setActiveTab("nft")}
        >
          <Text
            style={[styles.tabText, activeTab === "nft" && styles.activeText]}
          >
            NFTs
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View style={styles.contentContainer}>
        {activeTab === "crypto" ? (
          <Text style={styles.contentText}>🚀 Crypto Content</Text>
        ) : (
          <Text style={styles.contentText}>🎨 NFT Content</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 32 },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    width: "90%",
    marginInline: "auto",
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  activeTab: { borderBottomColor: COLORS.primary, borderBottomWidth: 2 },
  tabText: { fontSize: 16, color: "#fff" },
  activeText: { color: "#fff", fontWeight: "normal" },
  contentContainer: { alignItems: "center", marginTop: 20 },
  contentText: { fontSize: 18, fontWeight: "normal", color: COLORS.primary },
});

export default CryptoNFTTabs;
