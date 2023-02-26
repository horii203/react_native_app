// ボタンのコンポーネント
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function CircleButton(props) {
  // ボタンのプラスマイナスの切り替えはApp.jsxで行う
  const { children } = props;
  return (
    <View style={styles.circleButtom}>
      <Text style={styles.circleButtomLabel}>{children}</Text>
    </View>
  );
}

// CircleButtonを使うときchildrenは必須
CircleButton.propTypes = {
  children: string.isRequired,
}

const styles = StyleSheet.create({
  circleButtom: {
    backgroundColor: '#467fd3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position:'absolute',
    right: 40,
    bottom: 40,
    // 影の設定
    shadowColor: '#000',
    shadowOffset: {width: 8, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,  // android用
  },

  circleButtomLabel: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40
  }
})