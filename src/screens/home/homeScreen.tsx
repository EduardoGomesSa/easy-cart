import React from 'react';
import { StyleSheet, View } from 'react-native';
import ShopCard from './components/shopCard';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ShopCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'red'
  },
});
