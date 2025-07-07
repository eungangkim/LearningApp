import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import Footer from './components/Footer';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.content}>
          <StackNavigator />
        </View>
        <Footer />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
});

export default App;
