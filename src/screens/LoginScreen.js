import { StyleSheet, Text, View, TextInput,Button,Alert,alert,TouchableOpacity,Image  } from 'react-native'
import React,{useState} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
const LoginScreen = ({navigation}) => {

    const onPressSignIn =async()=>{

        if(Email ==""){
            Alert.alert("Please enter Email")
            return; }
            else if (Password == ""){
                Alert.alert("Please enter Password")
            return;}
          
            navigation.navigate("TabNavigator")
            await AsyncStorage.setItem("isLogedIn","true")
    navigation.navigate("TabNavigator")
        
    }


    const onPressForgot =()=>{
        navigation.navigate("Forgot" ,{Email:Email},{Password:Password} )
    }

    const onPressSignUp =()=>{
        navigation.navigate("SignUp")
    }
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    return (
        <View>
            <Text style={{ marginTop: 40, fontSize: 30, marginLeft: 10, fontWeight: "bold" }}>Welcome!</Text>
            <Text style={{ marginTop: 5, fontSize: 16, marginLeft: 10, fontWeight: "500" }}>Sign in to Your account</Text>

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
                placeholder='Password'
                value={Password}
                defaultValue={Password}
                onChangeText={(text)=>{
                    setPassword(text)
                }}
                style={{ borderWidth: 1, paddingHorizontal: 15, marginHorizontal: 15, marginTop: 15, borderRadius: 5 }}
            />
            
            <TouchableOpacity onPress={onPressForgot} > 
            <Text style={{fontSize:18,textAlign:"right",marginTop:20,color:"black",marginRight:14}}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={{marginHorizontal:20,marginTop:20,}}>
            <Button title='Sign In' onPress={onPressSignIn}/>
            </View>

            <Text style={{textAlign:"center",marginTop:25}}>--------------------- Or Sign In With --------------------</Text>

            {/* <Image style={{height:200,width:250,marginTop:20}} 
            source={require("../assets/go.png")}/> */}


            <Text style={{textAlign:"center",marginTop:30,fontSize:25}}>Google</Text>
              
              <TouchableOpacity onPress={onPressSignUp}>
            <Text style={{textAlign:"center",marginTop:30,fontSize:25}}>Don't have an account ? SignUp</Text>
              </TouchableOpacity>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})