// ボタンのコンポーネント
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

export default function Button(props) {
    const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonLabel}>{ label }</Text>
    </TouchableOpacity>
  );
}

// labelを定義
Button.prototype = {
    label: string.isRequired,
    onPress: func,
};

//デフォルトの値を設定する
Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#467fd3',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24
      },
    
      buttonLabel: {
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#fff'
      },
})