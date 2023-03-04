// 新規作成画面
import React from 'react';
// KeyboardAvoidingView キーボードが出た分だけ画面リサイズ
import { StyleSheet, View, TextInput, KeyboardAvoidingView } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoCreatScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar/>

      <View style={styles.inputContainer}>
        {/* メモ入力 multiline：複数行可能*/}
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton  name="check"/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 30,
    flex: 1,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  },
})