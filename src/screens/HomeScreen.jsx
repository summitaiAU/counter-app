import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Counter from '../components/Counter';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Counter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default HomeScreen;