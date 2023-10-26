import { StyleSheet, Text, View,TextInput,Button, Alert } from 'react-native'
import React, { useState } from 'react'

const SignUp = ({navigation}) => {

  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onPressSubmit=()=>{
    if(Email == ""){
     Alert.alert("Please enter email id ")
    return;}
    else if (password == ""){
      Alert.alert("please enter password ")
   return }
   else if (confirmPassword == ""){
    Alert.alert("please enter confirm password")
  return }
  else if (password != confirmPassword){
    Alert.alert("Both password must same")
  return; }
  navigation.navigate("HomeSCreen")
  }
  return (
    <View>
      <Text>SignUp</Text>

      <TextInput
                placeholder='Email'
                value={Email}
                defaultValue={Email}
                onChangeText={(text)=>{
                    setEmail(text)
                }}
                style={{ borderWidth: 1, paddingHorizontal: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}
            />

<TextInput
                placeholder='password'
                value={password}
                defaultValue={password}
                onChangeText={(text)=>{
                  setPassword(text)
                }}
                style={{ borderWidth: 1, paddingHorizontal: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}
            />


<TextInput
                placeholder='Confirm Password'
                value={confirmPassword}
                defaultValue={confirmPassword}
                onChangeText={(text)=>{
                  setConfirmPassword(text)
                }}
                style={{ borderWidth: 1, paddingHorizontal: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}
            />

<View style={{margin:29}}>
                <Button title='Submit' 
                 onPress={onPressSubmit} 
                />
            </View>

    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})