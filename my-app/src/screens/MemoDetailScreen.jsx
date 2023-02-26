// メモ詳細の画面
import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar/>
      <View style={styles.MemoHeader}>
        <Text style={styles.MemoTitle}>買い物リスト</Text>
        <Text style={styles.MemoDate}>2023年1月1日 10:00</Text>
      </View>

      <ScrollView style={styles.MemoBody}>
        <View style={styles.MemoText}>
          <Text>
            買い物リスト
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Text>
        </View>
      </ScrollView>

      {/* CircleButtonは独自で定義したものなので、CircleButton.jsxでstyleを適用できるように設定する */}
      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  MemoHeader: {
    backgroundColor: '#467fd3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,

  },

  MemoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },

  MemoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },

  MemoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },

  MemoText: {
    fontSize: 16,
    lineHeight: 24,
  }
})