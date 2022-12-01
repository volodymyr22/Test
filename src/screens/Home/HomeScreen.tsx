import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { GRADIENT } from '../../colors';
import LinearGradient from 'react-native-linear-gradient';
import { CustomInput } from '../../components/CustomInput/CustomInput';
import { CustomButton } from '../../components/CustomButton/CustomButton';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList, SCREENS } from '../../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { Modal } from '../../components/Modal/Modal';

export const HomeScreen: React.FC = React.memo(() => {
  const [minValue, setMinValue] = useState<number | null>(null);
  const [maxValue, setMaxValue] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const changeMinValue = useCallback((value: string) => {
    setMinValue(+value);
  }, []);

  const changeMaxValue = useCallback((value: string) => {
    setMaxValue(+value);
  }, []);

  const isEnableButton = useMemo(() => minValue && maxValue, [minValue, maxValue]);

  const onPress = useCallback(() => {
    if (minValue && maxValue) {
      if (minValue < maxValue && maxValue <= 500 && minValue > 0) {
        const params = {
          minValue,
          maxValue,
        };
        navigation.navigate(SCREENS.DATA_SCREEN, params);
      } else if (minValue > maxValue) {
        setError('Max number must be greater than min number');
      } else if (maxValue > 500) {
        setError('Max number must not exceed 500');
      } else if (maxValue < 1) {
        setError('Min number must be greater than 0');
      }
    }
  }, [navigation, maxValue, minValue]);

  return (
    <>
      {!!error && (
        <Modal modalVisible={!!error} setModalVisible={() => setError(null)} text={error} />
      )}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient style={styles.main} colors={[GRADIENT.from, GRADIENT.to]}>
          <Text style={styles.title}>Test App</Text>
          <View style={styles.wrapper}>
            <CustomInput
              maxLength={3}
              numeric
              label="Enter the minimum number"
              placeholder="min"
              value={minValue ? minValue.toString() : undefined}
              onChangeText={changeMinValue}
            />
            <CustomInput
              maxLength={3}
              numeric
              label="Enter the maximum number"
              placeholder="max"
              value={maxValue ? maxValue.toString() : undefined}
              onChangeText={changeMaxValue}
            />
            <CustomButton disabled={!isEnableButton} fullWidth onPress={onPress} text="Submit" />
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </>
  );
});
