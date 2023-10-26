import React, { useEffect, useState } from 'react';
import { View,Text, Image } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
export default function SplashScreen({ route, navigation }) {

    //  useEffect(() => {
    //   setTimeout(() => {
    //     navigation.navigate('LoginScreen')
    //   }, 1000);
    //  }, [])


    useEffect(() => {
      
        async function fetchData(){
          const value=await AsyncStorage.getItem("isLogedIn")
        //   AsyncStorage.getItem("")
          if(value !==null && value=="true"){
              setTimeout(()=>{
                  navigation.navigate("LoginScreen")
              },1000)
          }else{
              navigation.navigate("LoginScreen")
          }
        }
        fetchData();
      }, [navigation])



     

    return (
        <View>
            <Text style={{ marginTop:10,textAlign: 'center',  fontWeight: 'bold',fontSize:30}}>
                {"Ram Ramji"}
            </Text>
            <Text style={{ marginTop:10, marginBottom:-10 ,textAlign: 'center', fontWeight: 'bold',fontSize:30}}>
                {"Sitaram ji Ram ji"}
            </Text>
             {/* <View  style={{ justifyContent:'center', alignItems: 'center',}}  >
                <Image
                    style={{ width: 300, height: 450, alignItems: 'center' }}
                    resizeMode="contain"
                    source={require('../assets/sitaramphoto.jpg')}
                />
            </View>  */}
        </View>
    );
}