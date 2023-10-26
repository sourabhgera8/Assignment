import { Alert, Button, StyleSheet, Text, TextInput, View,alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const Forgot = ({navigation,route}) => {

    

    const [Email, setEmail] = useState("")

    const onPressSubmit=()=>{
        if(Email == ""){
            Alert.alert("Please enter email  id ")
        return; }
        navigation.navigate("SignUp")
    }

    useEffect(() => {
      setEmail(route?.param?.Email)
    }, [])
    
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 22, marginTop: 20 }}>Forgot</Text>

            <TextInput
                placeholder='Email'
                value={Email}
                defaultValue={Email}
                onChangeText={(text) => {
                    setEmail(text)
                }}
                style={{ borderWidth: 1, paddingHorizontal: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}
            />

            <View style={{margin:29}}>
                <Button title='Submit' onPress={onPressSubmit} />
            </View>

        </View>
    )
}

export default Forgot

const styles = StyleSheet.create({})