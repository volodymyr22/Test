import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const Loader: React.FC = React.memo(() => {
  const navigation = useNavigation();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={styles.loaderWrapper}>
      <View style={styles.loader}>
        <Text style={styles.text}>Loading...</Text>
        <CustomButton onPress={goBack} text="Cancel" />
      </View>
    </View>
  );
});
