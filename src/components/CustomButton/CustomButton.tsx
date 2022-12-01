import React, { useCallback, useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { COLORS } from '../../colors';
import { styles } from './styles';

type ButtonTypes = 'primary' | 'secondary';

interface Props {
  type?: ButtonTypes;
  fullWidth?: boolean;
  onPress: () => void;
  text: string;
  disabled?: boolean;
}

export const CustomButton: React.FC<Props> = React.memo(
  ({ type = 'primary', fullWidth, onPress, disabled, text }) => {
    const buttonColor = useMemo(() => {
      if (type === 'primary') {
        return COLORS.primaryButton;
      } else if (type === 'secondary') {
        return COLORS.secondaryButton;
      }
    }, [type]);

    const renderButtonStyle = useCallback(() => {
      return {
        width: fullWidth ? '100%' : '70%',
        backgroundColor: buttonColor,
        opacity: disabled ? 0.5 : 1,
      };
    }, [buttonColor, fullWidth, disabled]);

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={[renderButtonStyle(), styles.button]}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  },
);
