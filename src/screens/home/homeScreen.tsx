import AddButton from '@/src/components/addButton';
import Header from '@/src/components/header';
import { shops } from '@/src/constants/shops';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TaskAddModal from './components/modals/addShop';
import ShopCard from './components/shopCard';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
      <Header />
      {shops.map((item, index) => (
        <ShopCard key={index} {...item} />
      ))}
      
    </ScrollView>
    <AddButton onPress={() => setModalVisible(true)} />
      <TaskAddModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  scroll: {
    paddingBottom: 16,
  }
});
