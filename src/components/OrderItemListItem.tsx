import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OrderItem } from '../types';
import Colors from '../constants/Colors';
import { defaultPizzaImage } from './ProductListItem';
import { Image } from 'react-native';

type OrderItemListItemProps = {
  item: OrderItem;
}

const OrderItemListItem = ({ item }: OrderItemListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.products.image || defaultPizzaImage }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.products.name}</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.price}>${item.products.price}</Text>
          <Text>Size: {item.size}</Text>
        </View>
      </View>
      <View >
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
    </View>
  )
}

export default OrderItemListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
  quantity: {
    fontWeight: '500',
    fontSize: 18,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})