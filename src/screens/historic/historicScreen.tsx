import Header from '@/src/components/header';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HistoricScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Tela de Histórico de Compras</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink'
  },
});
