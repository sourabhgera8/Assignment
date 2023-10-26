import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Orders = () => {

 const [show, setShow] = useState(false)

  const OnPressHideComponent = () => {
    setShow(!show)
  }


  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center" }}>Show Hide Component</Text>

      <Button
        title='Toggle Component'
        onPress={OnPressHideComponent} />

      {
        show  ? <Users /> : null
      }





    </View>
  )
}

const Users = () => {
  return (
    <View>
      <Text style={{ fontSize: 24, color: "green", textAlign: "center" }}>
        User Component
      </Text>
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})