import {
    NavigationContainer, useNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';

import {MainStackNavigator} from "./MainStackNavigator";

export const AppNavigator: React.FC = () => {
    const navigationRef = useNavigationContainerRef();
    return (
        <NavigationContainer ref={navigationRef}>
            <MainStackNavigator />
        </NavigationContainer>
    );
};
