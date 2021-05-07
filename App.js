import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
 
  const [goals,setGoals]=useState([]);
 
  const addGoalHandler=(enteredGoal)=>{
    setGoals(currentGoals=>[...currentGoals,{
      id:Math.random().toString(),
      value:enteredGoal
    }])
  }
  return (
    <View style={styles.screen}>
     <GoalInput addGoalHandler={addGoalHandler}/>
    <FlatList keyExtractor={(item,index)=>item.id} data={goals} renderItem={itemData=><GoalItem title={itemData.item.value}/>}/> 
    
     
      
    
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding:50
},


});
