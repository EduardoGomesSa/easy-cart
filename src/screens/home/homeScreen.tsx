import Header from '@/src/components/header';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ShopCard from './components/shopCard';

export default function HomeScreen() {

  const mockData = [
    { title: 'Compra do mês 1', price: 'R$700.00', date: '17/01/25' },
    { title: 'Compra do mês 2', price: 'R$743.00', date: '17/02/25' },
    { title: 'Compra do mês 3', price: 'R$624.00', date: '17/03/25' },
    { title: 'Compra do mês 4', price: 'R$700.00', date: '17/04/25' },
    { title: 'Compra do mês 5', price: 'R$811.00', date: '17/05/25' },
  ];

  return (
    <ScrollView style={styles.scroll}>
      <Header />
      {mockData.map((item, index) => (
        <ShopCard key={index} {...item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scroll: {
    paddingBottom: 16,
    backgroundColor: 'white'
  }
});
