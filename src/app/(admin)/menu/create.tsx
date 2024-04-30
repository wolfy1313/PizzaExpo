import { View, Text, StyleSheet, TextInput } from 'react-native'
import Button from '@/src/components/Button'
import React, { useState } from 'react'

const CreateProductScreen = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const resetFields = () => {
    setName("");
    setPrice("")
  }

  const onCreate = () => {
    console.warn("Creating Product: ", name, "with price: ", price);

    resetFields()
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder='Name'
        style={styles.input} />
      <Text style={styles.label}>Price ($)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        placeholder='$9.99'
        style={styles.input}
        keyboardType='numeric' />

      <Button onPress={onCreate} text='Create' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 5,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
})

export default CreateProductScreen