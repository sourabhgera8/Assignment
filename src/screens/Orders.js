import { StyleSheet, Text, TextInput, View,  } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Button } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
let selectedIndex = -1

const TodoList = () => {

  const [name, setName] = useState("")
  const [data, setData] = useState(["Mohan", "kamal","Ramji"])

  const onPressAdd = () => {
    if (name === "") {
      alert("Enter name")
      return;
    } else {
      const existinList = [...data]
      existinList.push(name)
      setData(existinList)
      setName("")
    }

  }


  const onPressDelet = (item, index) => {

    Alert.alert(
      '',
      'Are you sure you want to delete? ' + item,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'), style: 'cancel'
        },
        {
          text: 'Sure yes I want to delete',
          onPress: () => {
            console.log('OK Pressed')

            const existinList = [...data]
            existinList.splice(index, 1)
            setData(existinList)
            console.log(index)
          }
        },

      ],
      { cancelable: false }
    )
  }

  const onPressEdit = (item, index) => {
    console.log(item)
    selectedIndex = index
    setName(item)
  }

  const onPressUpdate = () => {
    console.log("jai shree ram ji")
    const existinList = [...data]
    existinList.splice(selectedIndex, 1, name)
    setData(existinList)
    setName("")
  }




  const onRenderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, backgroundColor: 'black', marginTop: 20, marginHorizontal: 20, borderRadius: 10 }}>
        <Text style={{ backgroundColor: 'black', color: 'white', fontSize: 40, marginLeft: 10, padding: 15, flex: 1, borderRadius: 5 }}>{item}</Text>
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 10, marginBottom: 10 }}>
          <View style={{}}>
            <MaterialCommunityIcons name='delete' color={'white'} size={30}
              onPress={() => { onPressDelet(item, index) }}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Entypo name='edit' color={'white'} size={30}
              onPress={() => { onPressEdit(item, index) }}

            />
          </View>
        </View>

      </View>
    )
  }




  return (
    <View style={{ flex: 1, backgroundColor: '#FFF4E6' }}>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          placeholder='Enter name'
          style={{ borderWidth: 1, marginHorizontal: 20, marginTop: 20, paddingHorizontal: 10, borderRadius: 10, borderColor: 'green', flex: 1, }}
          value={name}
          defaultValue={name}
          onChangeText={(text) => { setName(text) }}
        />
        <View style={{ alignSelf: 'center', marginRight: 10, marginTop: 10 }}>
          <Button
            title='+'
            onPress={onPressAdd}
          />
        </View>
        <View style={{ alignSelf: 'center', marginRight: 10, marginTop: 10 }}>
          <Button
            title='update'
            onPress={onPressUpdate}
          />
        </View>
      </View>





      <FlatList
        data={data}
        renderItem={onRenderItem}
      />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})