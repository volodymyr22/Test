import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  loaderWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 30,
    height: 100,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
