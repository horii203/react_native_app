// ボタンのコンポーネント
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
  // ボタンのプラスマイナスの切り替えはApp.jsxで行う
  const { children, style } = props;
  return (
    <View style={[styles.circleButtom, style]}>
      <Text style={styles.circleButtomLabel}>{children}</Text>
    </View>
  );
}

// CircleButtonを使うときchildrenは必須
CircleButton.propTypes = {
  children: string.isRequired, //isRequiredデフォルトの場合はデフォルト値の設定不要
  style: shape(),
}

//デフォルトの値を設定する
CircleButton.defaultProps = {
  style: null,
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