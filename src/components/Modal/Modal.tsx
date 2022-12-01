import React from 'react';
import { Modal as RNModal, View, Text } from 'react-native';
import { CustomButton } from '../CustomButton/CustomButton';
import { styles } from './styles';

interface Props {
  modalVisible: boolean;
  setModalVisible: () => void;
  text: string;
}

export const Modal: React.FC<Props> = React.memo(({ setModalVisible, modalVisible, text }) => {
  return (
    <RNModal
      statusBarTranslucent
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible();
      }}
    >
      <View style={styles.background} />
      <View style={styles.modalWrapper}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{text}</Text>
          <CustomButton fullWidth text="Close" onPress={setModalVisible} />
        </View>
      </View>
    </RNModal>
  );
});
