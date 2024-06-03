import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
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
    <View>
      {/* <OrderListItem order={}/> */}
    </View>
  )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({})