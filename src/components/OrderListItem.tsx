import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Order } from '../types'
import { useSegments } from 'expo-router'

type OrderListItemProps = {
  order: Order
}

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments()
  const dayjs = require('dayjs')
  return (
    <View>
      <Text>OrderListItem</Text>
    </View>
  )
}

export default OrderListItem

const styles = StyleSheet.create({})