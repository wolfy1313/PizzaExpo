import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import { Stack } from 'expo-router'

export default function OrdersScreen() {
  return (
    <>
      {/* <Stack.Screen options={{ title: "Active" }} /> */}
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{ gap: 10, padding: 10 }}
      />
    </>
  )
}


const styles = StyleSheet.create({})