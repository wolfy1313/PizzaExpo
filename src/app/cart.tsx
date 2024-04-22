import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useContext } from 'react'
import { CartContext } from '../providers/CartProvider'

const CartScreen = () => {
  const { items } = useContext(CartContext)

  return (
    <View>
      <Text>Cart Items Length: {items.length}</Text>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen