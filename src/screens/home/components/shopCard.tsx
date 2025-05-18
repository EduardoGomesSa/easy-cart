import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ShopCard() {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkbox} />
      <Text style={styles.title}>Compra do mês</Text>
      <Text style={styles.price}>R$700.00</Text>
      <Text style={styles.date}>17/05/25</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3A71F5',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 6,
    marginHorizontal: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 12,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 16,
  },
  date: {
    color: '#fff',
    fontSize: 12,
  }
});
