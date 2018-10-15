import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onPressNo, onPressYes, visible }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => { }}
    >
      <View style={styles.container}>
        <CardSection style={styles.cardSection}>
          <Text style={styles.text}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onPressYes}>Yes</Button>
          <Button onPress={onPressNo}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
