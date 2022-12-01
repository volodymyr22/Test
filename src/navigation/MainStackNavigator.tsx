import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from './types';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { DataScreen } from '../screens/Data/DataScreen';

export const MainStack = createStackNavigator();

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export const MainStackNavigator: React.FC = React.memo(() => {
  return (
    <MainStack.Navigator
      screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
    >
      <MainStack.Screen name={SCREENS.HOME_SCREEN} component={HomeScreen} options={screenOptions} />
      <MainStack.Screen component={DataScreen} name={SCREENS.DATA_SCREEN} options={screenOptions} />
    </MainStack.Navigator>
  );
});
