import {StyleSheet} from "react-native";
import {COLORS} from "../../colors";

export const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 2,
        height: 55,
    },
    text: {
      fontSize: 18,
      fontWeight: '700',
      color: COLORS.white,
      textTransform: 'uppercase',
    },
});
