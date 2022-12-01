import {StyleSheet} from "react-native";
import {COLORS} from "../../colors";

export const styles = StyleSheet.create({
    main: {
      marginBottom: 20,
    },
    inputWrapper: {
        position: 'relative',
        marginTop: 4,
        backgroundColor: COLORS.backgroundInput,
    },
    inputCommon: {
        width: '100%',
        borderRadius: 2,
    },
    input: {
        color: '#000',
        padding: 18,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 18,
    },
    label: {
        fontWeight: '500',
        lineHeight: 22,
        fontSize: 15,
        color: 'gray',
    },
});
