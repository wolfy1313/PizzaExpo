import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/src/constants/Colors'
import Button from '@/src/components/Button'

const SignInScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [hidePass, setHidePass] = useState(true)

  const resetFields = () => {
    setEmail("");
    setPassword("")
  }

  const onSubmit = () => {
    console.log("sign in attempt")
    resetFields()
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={hidePass ? true : false}
        placeholder='Password'
        style={styles.input}
      />
      <Button onPress={onSubmit} text='Sign In' />
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center'
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10
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