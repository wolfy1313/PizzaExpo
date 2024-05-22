import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OrderItem } from '../types'
import { Link, useSegments } from 'expo-router'
import dayjs from 'dayjs'
import { defaultPizzaImage } from './ProductListItem'

type OrderListItemProps = {
  item: OrderItem
}

const OrderListItem = ({ item }: OrderListItemProps) => {
  const segments = useSegments()
  const dayjs = require('dayjs')
  const relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.products.name}</Text>
      </View>
    </View>
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
  image: {

  },
  title: {

  }
})