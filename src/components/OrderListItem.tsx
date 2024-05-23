import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OrderItem } from '../types'
import { Link, useSegments } from 'expo-router'
import dayjs from 'dayjs'
import { defaultPizzaImage } from './ProductListItem'
import Colors from '../constants/Colors'

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
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${item.products.price.toFixed(2)}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View style={styles.quantitySelector}>
        <Text style={styles.quantity}>{item.quantity}</Text>
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
    width: 75,
    aspectRatio: 1,
    alignSelf: 'center',
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 5,
  },
  subtitleContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  quantitySelector: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  quantity: {
    fontWeight: '500',
    fontSize: 18,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})