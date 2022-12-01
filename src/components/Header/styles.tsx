import {COLORS} from "../../colors";
import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    header: {
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 105,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#1D3758',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.white,
        lineHeight: 24,
    },
    imageWrapper: {
        position: 'absolute',
        left: 20,
        top: 60,
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
    },
    image: {
        width: 15,
        height: 15,
    },
});
