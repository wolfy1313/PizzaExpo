import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OrderItem } from '../types';

type OrderItemListItemProps = {
  orderItem: OrderItem;
}

const OrderItemListItem = ({ orderItem }: OrderItemListItemProps) => {
  return (
    <View>
      <Text>OrderItemListItem</Text>
    </View>
  )
}

export default OrderItemListItem

const styles = StyleSheet.create({})