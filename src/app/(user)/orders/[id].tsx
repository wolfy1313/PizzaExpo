import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams()

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
    </View>
  )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10
  },
})