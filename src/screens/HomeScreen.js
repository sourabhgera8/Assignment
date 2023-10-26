import {
    FlatList,
    StyleSheet,
    Text,
    Image,
    View,
    Button,
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import {TextInput} from 'react-native-paper';
  import {colors} from '../utils/colors';
  import { Dropdown } from 'react-native-element-dropdown';
  
  
  const HomeScreen = () => {
    const [fullName, setFullName] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
  
    const [expiryDate, setExpiryDate] = useState('');
    const [backspaceFlag, setBackspaceFlag] = React.useState(false);
  
    const [creditCardWrong, setcreditCardWrong] = useState(false);
    const [expiryDateError, setExpiryDateError] = useState(false);
  
    const [address, setAddress] = useState('')
  
    const [validateClick, setValidateClick] = useState(false)
  
    const fullNameRef = useRef(null);
    const creditCardRef = useRef(null);
    const expiryDateRef = useRef(null);
  
    const handleChangeCreditCard = text => {
       setCreditCardNumber(text)
       if(text.length == 16){
          const status = validateCreditCardNumber(text)
  
          if(status){
            setcreditCardWrong(false)
          }else{
            setcreditCardWrong(true)
          }
       }
    }
  
    function validateCreditCardNumber(input) {
      let creditCardInt = input.split('').map(Number);
  
      for (let i = creditCardInt.length - 2; i >= 0; i = i - 2) {
        let tempValue = creditCardInt[i];
  
        tempValue = tempValue * 2;
  
        if (tempValue > 9) {
          tempValue = (tempValue % 10) + 1;
        }
  
        creditCardInt[i] = tempValue;
      }
  
      let total = 0;
      for (let i = 0; i < creditCardInt.length; i++) {
        total += creditCardInt[i];
      }
  
      return total % 10 === 0;
    }
  
    const handleChangeExpiryDate = text => {
      let textTemp = text;
      if (textTemp[0] !== '1' && textTemp[0] !== '0') {
        textTemp = '';
      }
      if (textTemp.length === 2) {
        if (
          parseInt(textTemp.substring(0, 2)) > 12 ||
          parseInt(textTemp.substring(0, 2)) == 0
        ) {
          textTemp = textTemp[0];
        } else if (text.length === 2 && !backspaceFlag) {
          textTemp += '/';
          setBackspaceFlag(true);
        } else if (text.length === 2 && backspaceFlag) {
          textTemp = textTemp[0];
          setBackspaceFlag(false);
        } else {
          textTemp = textTemp[0];
        }
      }
      setExpiryDate(textTemp);
  
      if(textTemp?.length == 5){
        validateExpiryDate(text)
       }else{
        setExpiryDateError(false)
       }
    };
  
    function validateExpiryDate(input) {
  
      const selectredMonth  = input.substring(0, 2);
      const selectredYear  = input.substring(3, 5);
  
      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;
    
      if(selectredYear > currentYear ){
          setExpiryDateError(false)
      }else if(currentMonth <= selectredMonth &&  currentYear <= selectredYear ){
          setExpiryDateError(false)
      }else{
        setExpiryDateError(true)
      }
    }
  
    const onPressAddPayment = () => {
     
      console.log("S_______ fullName ", fullName);
      console.log("S_______ creditCardNumber ", creditCardNumber);
      console.log("S_______ expiryDate ", expiryDate);
      console.log("S_______ address ", address);
      setValidateClick(true);
  
      if(fullName != '' && creditCardNumber != '' &&  expiryDate!= '' && address!= ''){
          alert("FullName :- " + fullName + "\nCredit Card Number " +creditCardNumber  + "\nExpiry Date " +expiryDate + "\nAddress " +address)
      }
  
      
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          mode="outlined"
          ref={fullNameRef}
          style={styles.textInputStyle}
          autoCapitalize="none"
          returnKeyType="next"
          label="Full Name"
          underlineColorAndroid={'rgba(0,0,0,0)'}
          text="white"
          onChangeText={text => {
            setFullName(text);
          }}
          left={
            <TextInput.Icon color={colors.black} name={'card-account-details'} />
          }
          right={
            <TextInput.Icon
              color={fullName?.length == 0 ? colors.grey : colors.green}
              name={'check-circle'}
            />
          }
          value={fullName}
          defaultValue={fullName}
          theme={styles.textInputOutlineStyle}
          onSubmitEditing={() => {
            creditCardRef.current.focus();
          }}
        />
  
  
  {( fullName == '' &&  validateClick)  && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'Cannot be empty'}
          </Text>
        )}
  
        <TextInput
          mode="outlined"
          ref={creditCardRef}
          style={styles.textInputStyle}
          autoCapitalize="none"
          returnKeyType="next"
          label="Credit Card Number"
          keyboardType={'numeric'}
          text="white"
          maxLength={16}
          onChangeText={text => handleChangeCreditCard(text)}
          value={creditCardNumber}
          defaultValue={creditCardNumber}
          theme={styles.textInputOutlineStyle}
          left={<TextInput.Icon color={colors.black} name={'credit-card'} />}
          right={
            <TextInput.Icon
              color={creditCardWrong ? colors.red : colors.green}
              name={creditCardWrong ? 'close' : 'check-circle'}
            />
          }
          onSubmitEditing={() => {
            expiryDateRef.current.focus();
          }}
        />
  
  {( creditCardNumber == '' &&  validateClick)  && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'Cannot be empty'}
          </Text>
        )}
  
        {creditCardWrong && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'You have entered wrong card detail'}
          </Text>
        )}
  
        <TextInput
          mode="outlined"
          ref={expiryDateRef}
          style={styles.textInputStyle}
          autoCapitalize="none"
          returnKeyType="next"
          label=" Expiry Date (MM/YY)"
          keyboardType={'numeric'}
          text="white"
          maxLength={5}
          onChangeText={text => handleChangeExpiryDate(text)}
          left={<TextInput.Icon color={colors.black} name={'clock'} />}
          right={
            <TextInput.Icon
              color={expiryDateError ? colors.red : colors.green}
              name={expiryDateError ? 'close' : 'check-circle'}
            />
          }
          value={expiryDate}
          defaultValue={expiryDate}
          theme={styles.textInputOutlineStyle}
          
        />
  
  {( expiryDate == '' &&  validateClick)  && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'Cannot be empty'}
          </Text>
        )}
  
        {expiryDateError && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'Card is Expired'}
          </Text>
        )}
  
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 20,
            borderColor: 'white',
            borderWidth: 1,
            marginHorizontal: 20,
          }}>
          <View style={{marginBottom: 20}}></View>
          <Dropdown
            data={[
              {address: '2d 96 Faridabad 121005'},
              {address: '1274 Parvatiya Colony FBd 121005'},
              {address: '2010 Parvatiya Colony FBd 121005'},
              {address: '12 CP Delhi office 110044'},
            ]}
            dropdownPosition={'bottom'}
            labelField="address"
            valueField="address"
            placeholder="Select Address"
            searchPlaceholder="Search..."
            itemContainerStyle={{color:'red',}}
            itemTextStyle={{color:'black'}}
            selectedStyle={{color:'yellow'}}
            containerStyle={{backgroundColor:'grey' , marginBottom:20}}
            value={address}
            defaultValue={address}
            onChange={item => {
              setAddress(item.address);
            }}
          />
        </View>
  
        {( address == '' &&  validateClick)  && (
          <Text style={{paddingLeft: 20, color: colors.red, fontSize: 20}}>
            {'Select Billing Address'}
          </Text>
        )}
  
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            paddingVertical: 20,
            margin: 20,
            borderRadius: 10,
          }}
          onPress={onPressAddPayment}>
          <Text style={{textAlign: 'center', fontSize: 26, color: colors.white}}>
            Add Payment Method
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
    },
    textInputStyle: {
      marginLeft: 20,
      marginTop: 20,
      paddingRight: 10,
      fontSize: 20,
    },
    textInputOutlineStyle: {
      colors: {
        placeholder: colors.white,
        text: colors.white,
        primary: colors.white,
        underlineColor: 'transparent',
        background: colors.grey,
      },
    },
  });