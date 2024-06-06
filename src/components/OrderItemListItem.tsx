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
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
})