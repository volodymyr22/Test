import { StyleSheet } from 'react-native';
import { COLORS } from '../../colors';

export const styles = StyleSheet.create({
  main: {
    marginTop: 16,
    backgroundColor: COLORS.white,
    width: 335,
    minHeight: 231,
    borderRadius: 2,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowColor: 'rgba(76 76 76 0.1)',
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 52,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  contentBorder: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    borderTopColor: COLORS.border,
  },
  contentPadding: {
    paddingVertical: 20,
  },
  textWrapper: {
    marginBottom: 20,
  },
  textMb: {
    marginBottom: 10,
  },
});
