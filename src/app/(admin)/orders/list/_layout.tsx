import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator)


export default function OrderListNavigator() {
  return <TopTabs />
}