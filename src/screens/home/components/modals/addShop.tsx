import React from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface TaskAddModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function TaskAddModal({ visible, onClose }: TaskAddModalProps) {
  const [task, setTask] = React.useState('');

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
          >
            <View style={styles.content}>
              <TextInput
                placeholder="Digite a tarefa"
                style={styles.input}
                value={task}
                onChangeText={setTask}
              />
              <Button title="Salvar" onPress={onClose} />
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});
