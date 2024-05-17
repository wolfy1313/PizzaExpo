import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Order } from '../types'
import { Link, useSegments } from 'expo-router'
import dayjs from 'dayjs'

type OrderListItemProps = {
  order: Order
}

const OrderListItem = ({ order }: OrderListItemProps) => {
  const segments = useSegments()
  const dayjs = require('dayjs')
  const relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <Text style={styles.orderNumber}>Order #{order.id}</Text>
        <Text>{dayjs(order.created_at).fromNow()}</Text>
        <Text style={styles.status}>{order.status}</Text>
      </Pressable>
    </Link>
  )
}

export default OrderListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    minWidth: '100%'
  },
  orderNumber: {
    fontWeight: 'bold'
  },
  status: {
    alignSelf: 'flex-end',
    // alignContent: 'center'
    // justifyContent: 'center'
    // verticalAlign: 'middle',
    // textAlignVertical: 'center'
  },
})