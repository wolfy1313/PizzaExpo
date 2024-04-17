import { useLocalSearchParams, Stack } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'
import products from '@/assets/data/products'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find((p) => p.id.toString() === id)

  return (
    <View>
      <Stack.Screen options={{ title: product?.name }} />
      <Text style={{ fontSize: 20 }}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen;