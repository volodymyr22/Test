import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
  numeric?: boolean;
}

export const CustomInput: React.FC<Props> = React.memo(
  ({ label, value, onChangeText, placeholder, maxLength, numeric }) => {
    return (
      <View style={styles.main}>
        <Text style={styles.label}>{label}</Text>
        <View style={[styles.inputWrapper, styles.inputCommon]}>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            maxLength={maxLength}
            style={[styles.input, styles.inputCommon]}
            keyboardType={numeric ? 'number-pad' : undefined}
          />
        </View>
      </View>
    );
  },
);
