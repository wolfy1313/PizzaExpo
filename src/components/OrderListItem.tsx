import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Order, OrderItem } from '../types'
import { Link, useSegments } from 'expo-router'
import dayjs from 'dayjs'
import { defaultPizzaImage } from './ProductListItem'
import Colors from '../constants/Colors'

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
        <View>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.time}>{dayjs(order.created_at).fromNow()}</Text>
        </View>

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  time: {
    color: 'gray',
  },
  status: {
    fontWeight: '500',
  },
});