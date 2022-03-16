import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewEvent() {
  return (
    <View style={styles.container}>
      <Text>Novo Evento</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
