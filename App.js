import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder ="Your Goal" style={styles.input}/>
        <Button title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding:50
},
inputContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center'
},
input:{
  width:'80%',
  borderColor:'black',
  borderWidth:1,
  padding:10
}
});
