import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: COLORS.dark,
    opacity: 0.5,
    zIndex: 20,
  },
  modalWrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 25,
  },
  modal: {
    width: 335,
    backgroundColor: COLORS.white,
    borderRadius: 2,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize: 16,
    color: COLORS.dark,
    lineHeight: 24,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
});
