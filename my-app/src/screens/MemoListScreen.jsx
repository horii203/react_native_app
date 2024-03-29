// メモリストの画面
import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen(props) {
  // React Navigation
  const { navigation } = props;

  return (
    <View style={styles.container}>

      <MemoList/>

      <CircleButton 
        name="plus"
        onPress={()=> { navigation.navigate('MemoCreate'); }} //チェックボタンを押すと前の画面に戻る
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
      },
})