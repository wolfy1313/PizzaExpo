import { useLocalSearchParams, Stack } from 'expo-router'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import products from '@/assets/data/products'
import { defaultPizzaImage } from '@/src/components/ProductListItem'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()
  const product = products.find((p) => p.id.toString() === id)

  if (!product) {
    return <Text>Product not found</Text>
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image source={{ uri: product.image || defaultPizzaImage }} style={ } />
      <Text style={{ fontSize: 20 }}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {},
  price: {}
})

export default ProductDetailsScreen;