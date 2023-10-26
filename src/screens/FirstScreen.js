import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
//import { Dropdown } from 'react-native-element-dropdown';
import { Dropdown } from 'react-native-element-dropdown'
const FirstScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ flex: 1, borderWidth: 1, height: 50, textAlign: "center", paddingTop: 20 }}>BBB</Text>
                <Text style={{
                    flex: 2, borderWidth: 1,
                    height: 50, textAlign: "center",
                    backgroundColor: "grey", paddingTop: 20, color: "white", fontSize: 20
                }}>ACCREDITED BUSINESS</Text>
            </View>

            <TextInput
                placeholder=''
                style={{
                    borderWidth: 1, marginHorizontal: 35,
                    paddingHorizontal: 25, backgroundColor: "lightgrey"
                }}
            />

            <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={{
                    backgroundColor: "green ",
                    textAlign: "center",
                    color: "white",
                    marginHorizontal: 40,
                    fontSize: 16,
                    padding: 10,
                    // margin:30,
                    backgroundColor: "green",
                    borderRadius: 10,
                    shadowColor: "black",
                    elevation: 10,
                    shadowOpacity: 1
                }}>Debit/Credit</Text>

                <Text style={{
                    backgroundColor: "green ", textAlign: "center",
                    color: "white",
                    marginHorizontal: 40,
                    fontSize: 16,
                    padding: 10,
                    // margin:30,
                    backgroundColor: "lightgrey",
                    borderRadius: 10,
                    shadowColor: "black",
                    elevation: 10,
                    shadowOpacity: 1
                }}>Bank Account</Text>
            </View>

            <TextInput
                placeholder='Full Name'
                style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderWidth: 1
                }}
            />

            <TextInput
                placeholder='Card Number'
                style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderWidth: 1
                }}
            />

            <TextInput
                placeholder='MM/YY'
                style={{
                    marginHorizontal: 10,
                    paddingHorizontal: 10,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    borderWidth: 1
                }}
            />

            <View style={{borderWidth:1}}>
                {/* <Text>Billing</Text> */}
                <View style={{ marginTop: 21, paddingHorizontal: 20 }}>
                    <Text name={'Your Status'} />
                    <View style={{ marginTop: 12 }}></View>
                    <Dropdown
                        // data={data}
                        data={[{ status: '2D-96' }, { status: 'Parvatiya colony' }, 
                        { status: 'Jawahar Colony' }, { status: '5D-107' }]}
                        dropdownPosition={'top'}
                        labelField="status"
                        valueField="_id"
                       // placeholder="Select Cuisine"
                        searchPlaceholder="Search..."

                    />
                </View>
            </View>

            <TouchableOpacity>
      <Text style={styles.button1}
    >Add Payment Method</Text>
      </TouchableOpacity>



        </View>

    )
}

export default FirstScreen

const styles = StyleSheet.create({
    dropdown: {
        //   margin: 16,
        borderWidth: 1,
        height: 56,
        borderRadius: 12,
        //   borderColor:Colors.BORDER_COLOR,
        paddingHorizontal: 20
        //   borderBottomWidth: 0.5,
    },
    button1:{
        textAlign:"center",
        color:"white",
        fontSize:24,
        padding:10,
        margin:10,
        backgroundColor:"#ffaf34",
      borderRadius:5,
    shadowColor:"black",
    elevation:10,
    shadowOpacity:1,
    marginTop:65
      },
      button2:{
        backgroundColor:"blue"
      },
      button3:{
        backgroundColor:"gold"
      },
      button4:{
        backgroundColor:"red"
      },
      button5:{
        backgroundColor:"grey"
      }

   
})