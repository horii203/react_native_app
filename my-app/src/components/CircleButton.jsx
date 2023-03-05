// ボタンのコンポーネント
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons'; 

export default function CircleButton(props) {
  // ボタンのプラスマイナスの切り替えは親コンポーネントで行う
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButtom, style]} onPress={onPress}>
      {/* naneプロパティを変更することでボタンのアイコンを変更できる */}
      <Feather name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

// CircleButtonを使うときnameは必須
CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,//isRequiredの場合はデフォルト値の設定不要
  onPress: func,// ボタンをタップしたときに実行する関数
}

//デフォルトの値を設定する
CircleButton.defaultProps = {
  style: null,
  onPress: null,
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