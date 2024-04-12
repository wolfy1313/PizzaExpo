import { useLocalSearchParams, Stack } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Stack.Screen options={{ title: 'Details' }} />
      <Text style={{ fontSize: 20 }}>ProductDetailsScreen for id: {id}</Text>
    </View>
  )
}

export default ProductDetailsScreen;