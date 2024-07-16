import { Stack } from "expo-router";
import React from "react";


const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  )
}

export default OrdersLayout