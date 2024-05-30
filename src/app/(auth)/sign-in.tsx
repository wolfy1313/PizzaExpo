import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/src/constants/Colors'
import Button from '@/src/components/Button'
import { Stack, Link } from 'expo-router'


const SignInScreen = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [hidePass, setHidePass] = useState(true)

  const resetFields = () => {
    setEmail("");
    setPassword("")
  }

  const onSubmit = () => {
    console.log("sign in attempt")
    resetFields()
  }

  // const toggleHidePass = () => {
  //   setHidePass(!hidePass)
  // }


  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign In" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        style={styles.input}
      />
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder='Password'
          style={styles.input}
        />
        {/* <TouchableOpacity  style={styles.toggleButton}>
          <Text style={styles.toggleText}>{}</Text>
        </TouchableOpacity> */}
      </View>
      <Button onPress={onSubmit} text='Sign In' />
      <Link style={styles.textButton} href={'/sign-up'}>
        <Text>Create an Account</Text>
      </Link>
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
  passwordContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: 14,
  },
  toggleText: {
    color: Colors.light.tint,
  },
  label: {
    color: 'gray',
    fontSize: 16,
  },
})