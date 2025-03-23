import { Tabs } from "expo-router";
import React from "react";
import Home from "@/assets/icons/Home";
import SwapIcon from "@/assets/icons/SwapIcon";
import NotifyIcon from "@/assets/icons/NotifyIcon";
import SettingIcon from "@/assets/icons/SettingIcon";
import { COLORS } from "@/constants/theme";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerShadowVisible: true,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="swap"
        options={{
          title: "Swap",
          tabBarIcon: ({ color, focused }) => (
            <SwapIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <NotifyIcon color={color} width={24} height={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <SettingIcon color={color} width={24} height={24} />
          ),
        }}
      />
    </Tabs>
  );
}
