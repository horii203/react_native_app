// ログイン画面
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import Button from '../components/Button';

export default function LogInScreen(props) {
  // React Navigation
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, sePassword] = useState('');
  
  return (
    <View style={styles.container}>

        <View style={styles.inner}>
            <Text style={styles.title}>Log In</Text>
            <TextInput 
              style={styles.input} 
              value={email} 
              //入力した値をtextに入れて関数に渡す
              onChangeText={(text)=>{ setEmail(text); }}
              autoCapitalize="none" //最初の文字が大文字にならないように
              keyboardType="email-address" //@とかがあるキーボードになる
              placeholder="Email Address"
              textContentType="emailAddress"
            />
            <TextInput 
              style={styles.input} 
              value={password} 
              onChangeText={(text)=>{ sePassword(text); }}
              autoCapitalize="none"
              placeholder="Password"
              secureTextEntry //●で隠す
              textContentType="password"
            />

            <Button 
              label="submit"
              onPress={()=> { 
                navigation.reset({ // ログイン後のbackボタンを表示させないため履歴の削除
                  index: 0, 
                  routes: [{ name: 'MemoList' }],
                });
              }}   
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>Not registered?</Text>
                <TouchableOpacity 
                  onPress={() => { 
                    navigation.reset({
                      index: 0, 
                      routes: [{ name: 'SignUp' }],
                    });
                  }}
                >
                  <Text style={styles.footerLink}>Sign up here</Text>
                </TouchableOpacity>
            </View>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8'
  },

  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },

  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },

  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal:8,
    marginBottom: 16
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },

  footer: {
    flexDirection: 'row'
  }
})