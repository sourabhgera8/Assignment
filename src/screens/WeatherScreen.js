import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [data, setData] = useState(['Chennai', 'Gulmarg', 'Pahalgam', 'Delhi', 'Mumbai', 'Faridabad', 'Madras',  ]);

  const api_key = 'f6cafaaca4769a26d1780f8f52bd6887';

  const [weatherData, setWeatherData] = useState({});

  const [errorMessage, setErrorMessage] = useState('')

  const onPressItemClick = (item, index) => {
    setErrorMessage('')
    setWeatherData({})
    getWeatureInfoFromApiAsync(item);
  };

  const getWeatureInfoFromApiAsync = async item => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${api_key}`;

      console.log('K_________--- url ', url);

      const response = await fetch(url);
      const json = await response.json();

      console.log('K_________--- json ', json);
      console.log('K_________--- json ', json?.message);

      if(json.cod == 401){
        console.log('K_________--- commmmmmmmmmmmmmmmmmmmmmm 401', json?.message);

         setErrorMessage(""+json?.message)
      }else{
        setWeatherData(json);
      }
    } catch (error) {
      console.error(error);
      console.log('K_________--- error ', error);
    }
  };

  const onRenderItem = ({item, index}) => {
    return (
      <View
        style={{
          borderRadius: 20,
          marginHorizontal: 10,
          marginTop: 10,
          width: 300,
          backgroundColor: 'black',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            paddingVertical: 40,
            fontSize: 44,
          }}>
          {item}
        </Text>

        <TouchableOpacity
          onPress={() => onPressItemClick(item)}
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
            width: 200,
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              paddingVertical: 10,
              fontSize: 44,
            }}>
            Refresh
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={onRenderItem} horizontal />

      {JSON.stringify(weatherData) != '{}' && (
        <View
          style={{
            backgroundColor: 'black',
            marginHorizontal: 20,
            padding: 20,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                flex: 0.7,
                color: 'white',
                fontSize: 35,
                textAlign: 'left',
              }}>
              Temp
            </Text>

            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: 35,
                textAlign: 'right',
              }}>
              {(weatherData?.main?.temp - 273).toFixed(2)} &deg; C
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: 24,
                textAlign: 'left',
              }}>
              humidity
            </Text>
            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: 24,
                textAlign: 'right',
              }}>
              {weatherData?.main?.humidity}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: 24,
                textAlign: 'left',
              }}>
              pressure
            </Text>

            <Text
              style={{
                flex: 1,
                color: 'white',
                fontSize: 24,
                textAlign: 'right',
              }}>
              {weatherData?.main?.pressure}
            </Text>
          </View>
        </View>
      )}

{errorMessage != ''  && 
        <Text style={{ color: 'red', fontSize: 44, textAlign: 'center'}}>
          {errorMessage}
        </Text>
}
      
     
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});