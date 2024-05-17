import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import orders from '@/assets/data/orders'
import OrderListItem from '@/src/components/OrderListItem'

const index = () => {
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  )
}

export default index

const styles = StyleSheet.create({})