import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'
import OrderItemListItem from '@/src/components/OrderItemListItem'
import useMaxBrightness from '@/src/components/UseMaxBrightness'

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  useMaxBrightness()

  const order = orders.find((o) => o.id.toString() === id)

  if (!order) {
    return (
      <Text>No Order Found!</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    gap: 10,
    flex: 1,
    padding: 10
  },
})