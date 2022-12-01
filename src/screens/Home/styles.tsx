import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textTransform: 'uppercase',
    color: COLORS.white,
    marginBottom: 20,
    fontWeight: '900',
    fontSize: 25,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 15,
  },
});
