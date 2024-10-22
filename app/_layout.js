import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const logIn = () => {
  // usestate for checkbox
  const [isChecked, setisChecked] = useState(false)

  return (
    <View style={ styles.page_container }>
      {/* Log in text */}
      <View style={{ alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 30, fontWeight: '700', paddingTop: 100, opacity: 0.7 }}>Welcome back</Text>
        <Text style={{ fontSize: 13, fontWeight: '500', color: 'grey', paddingTop: 10 }}>Continue Your Path</Text>
      </View>

      {/* Log in input fields */}
      <View style={{ marginHorizontal: 40, marginTop: 10 }}>
        {/* Email input */}
        <View style={{ marginBottom: 13 }}>
          <Text style={{ color: '#8F8F8F', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Email</Text>
          <TextInput style={ styles.text_input_field } secureTextEntry={false} autoCapitalize={'none'} autoCorrect={false}/>
        </View>
        {/* Password input */}
        <View style={{ marginBottom: 17 }}>
          <Text style={{ color: '#8F8F8F', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Password</Text>
          <TextInput style={ styles.text_input_field } secureTextEntry={true} autoCapitalize={'none'} autoCorrect={false}/>
        </View>
      </View>

      {/* Others */}
      <View style={{ flexDirection: 'row', marginHorizontal: 40 }}>
        <TouchableOpacity onPress={() => setisChecked(!isChecked)} style={{ flexDirection: 'row', flex: 1 }} activeOpacity={0.5}>
          {isChecked ? ( <Icon name="check-square" size={17} color="#e83c54" /> ) : ( <Icon name="square-o" size={17} color="#8F8F8F" /> )}
          <Text style={{ paddingLeft: 4, fontSize: 11, color: 'grey' }}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}><Text style={{ fontSize: 11, color: 'grey' }}>Forgot Password?</Text></TouchableOpacity>
      </View>

      {/* Login button */}
      <TouchableOpacity activeOpacity={0.8} style={ styles.log_in_button }>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>Login</Text>
      </TouchableOpacity>
      <Text style={{ color: 'grey', textAlign: 'center', marginVertical: 15 }}>Or</Text>

      {/* Other login options */}
      {/* Facebook */}
      <TouchableOpacity activeOpacity={0.7} style={ styles.other_login_opt }>
        <Image source={require('../assets/icons/facebook-icon.png')} style={{ width: 30, height: 30 }}/>
        <Text style={{ color: '#8F8F8F', fontWeight: '500' }}>Login With Facebook</Text>
      </TouchableOpacity>
      {/* Google */}
      <TouchableOpacity activeOpacity={0.7} style={ styles.other_login_opt }>
        <Image source={require('../assets/icons/google-icon.png')} style={{ width: 30, height: 30 }}/>
        <Text style={{ color: '#8F8F8F', fontWeight: '500' }}>Login With Google</Text>
      </TouchableOpacity>
      {/* Apple */}
      <TouchableOpacity activeOpacity={0.7} style={ styles.other_login_opt }>
        <Image source={require('../assets/icons/apple-icon.png')} style={{ width: 30, height: 30 }}/>
        <Text style={{ color: '#8F8F8F', fontWeight: '500' }}>Login With Apple</Text>
      </TouchableOpacity>

      {/* Sign up option */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 42, marginVertical: 30 }}>
        <Text style={{ fontSize: 12, color: 'grey', fontWeight: '500' }}>Don't Have An Account?</Text>
        <TouchableOpacity activeOpacity={0.7}><Text style={{ color: '#e83c54', fontSize: 25, fontWeight: '500', marginRight: 50 }}>Sign Up</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default logIn

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: 'white',
    flex: 1
  },

  text_input_field: {
    height: 40,
    paddingLeft: 10,
    borderColor: '#8F8F8F', 
    borderWidth: 1,
    borderRadius: 8,
  },

  log_in_button: {
    height: 50,
    backgroundColor: '#e83c54',
    marginHorizontal: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  other_login_opt: {
    height: 50,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    borderWidth: 1, 
    borderColor: '#8F8F8F', 
    borderRadius: 10, 
    marginHorizontal: 43,
    marginBottom: 30,
    paddingHorizontal: 60,
  }
})