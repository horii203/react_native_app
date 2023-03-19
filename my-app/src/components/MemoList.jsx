// 上部のバーのコンポーネント
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'; 

export default function MemoList() {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }} //メモ詳細画面に遷移
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年1月1日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }} 
        >
          {/* ×アイコン */}
          <Feather name={'x'} size={16} color='#bobobo'/>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }} //メモ詳細画面に遷移
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年1月1日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }} 
        >
          {/* ×アイコン */}
          <Feather name={'x'} size={16} color='#bobobo'/>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }} //メモ詳細画面に遷移
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2023年1月1日 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoDelete}
          onPress={() => { Alert.alert('Are you sure?'); }} 
        >
          {/* ×アイコン */}
          <Feather name={'x'} size={16} color='#bobobo'/>
        </TouchableOpacity>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },

  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },

  memoListItemDate: {
    fontSize: 16,
    color: '#848484'
  },

  memoDelete: {
    padding: 8
  },

})