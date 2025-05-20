import AddButton from '@/src/components/addButton';
import Header from '@/src/components/header';
import { shops } from '@/src/constants/shops';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ShopCard from './components/shopCard';

export default function HomeScreen() {

  return (
    <ScrollView style={styles.scroll}>
      <Header />
      {shops.map((item, index) => (
        <ShopCard key={index} {...item} />
      ))}
      <AddButton onPress={()=>{}} />
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
