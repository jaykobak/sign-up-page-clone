import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Touchable } from 'react-native'
import React from 'react'

const signUp = () => {
  return (
    <View style={ styles.page_container }>
      <ScrollView>
        {/* Sign up text */}
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#756eae', fontSize: 30, fontWeight: '700', paddingTop: 120 }}>Welcome</Text>
          <Text style={{ fontSize: 13, fontWeight: '500', color: '#756eae', paddingTop: 15 }}>Discover Your Path</Text>
        </View>

        {/* Sign up input fields */}
        <View style={{ marginHorizontal: 40, marginTop: 30 }}>
          <View style={{ marginBottom: 17 }}>
            <Text style={{ color: '#B7B7B7', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Name</Text>
            <TextInput style={ styles.text_input_field } secureTextEntry={false} autoCapitalize={'words'} autoCorrect={false}/>
          </View>

          <View style={{ marginBottom: 17 }}>
            <Text style={{ color: '#B7B7B7', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Email</Text>
            <TextInput style={ styles.text_input_field } secureTextEntry={false} autoCapitalize={'none'} autoCorrect={false}/>
          </View>

          <View style={{ marginBottom: 17 }}>
            <Text style={{ color: '#B7B7B7', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Password</Text>
            <TextInput style={ styles.text_input_field } secureTextEntry={true} autoCapitalize={'none'} autoCorrect={false}/>
          </View>

          <View style={{ marginBottom: 17 }}>
            <Text style={{ color: '#B7B7B7', paddingBottom: 3, fontSize: 12, fontWeight: '500' }}>Confirm Password</Text>
            <TextInput style={ styles.text_input_field } secureTextEntry={true} autoCapitalize={'none'} autoCorrect={false}/>
          </View>
        </View>

        {/* Sign up button */}
        <TouchableOpacity activeOpacity={0.8} style={ styles.sign_up_button }>
          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>sign up</Text>
        </TouchableOpacity>
        <Text style={{  fontSize: 11, marginHorizontal: 42, marginTop: 20, color: 'grey', textAlign: 'center' }}>By Clicking On Sign Up You Accept Our <Text style={{ fontWeight: '500', color: '#756eae' }}>Terms Of Service</Text> And <Text style={{ fontWeight: '500', color: '#756eae' }}>Privacy Policy</Text></Text>

        {/* Login option */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 42, marginVertical: 30 }}>
          <Text style={{ fontSize: 12, color: 'grey', fontWeight: '500' }}>Already Have An Account?</Text>
          <TouchableOpacity activeOpacity={0.7}><Text style={{ color: '#e83c54', fontSize: 25, fontWeight: '500', marginRight: 50 }}>Login</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default signUp

const styles = StyleSheet.create({
  page_container: {
    backgroundColor: '#191919',
    flex: 1,
  },

  text_input_field: {
    height: 40,
    paddingLeft: 10,
    borderColor: '#B7B7B7', 
    borderWidth: 1,
    borderRadius: 8,
  },

  sign_up_button: {
    height: 50,
    backgroundColor: '#e83c54',
    marginHorizontal: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  }
})