export enum SCREENS {
    HOME_SCREEN = 'Home',
    DATA_SCREEN = 'Data',
}

export type MainStackParamList = {
    [SCREENS.HOME_SCREEN]: undefined;
    [SCREENS.DATA_SCREEN]: { minValue: number; maxValue: number };
}

