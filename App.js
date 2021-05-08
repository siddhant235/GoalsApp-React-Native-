import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,TextInput,FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
 
  const [goals,setGoals]=useState([]);
  const[show,setShow]=useState(false);
  const addGoalHandler=(enteredGoal)=>{
    setGoals(currentGoals=>[...currentGoals,{
      id:Math.random().toString(),
      value:enteredGoal
    }])
    setShow(false)
  }
  const removeGoalHandler=(id)=>{
    setGoals(currentGoals=>{
      return currentGoals.filter(goal=>goal.id!==id)
    }
    )
  }
  const cancelHandler=()=>{
    setShow(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add new Goal" onPress={()=>setShow(true)}/>
     <GoalInput addGoalHandler={addGoalHandler} show={show} onCancel={cancelHandler} />
    <FlatList keyExtractor={(item,index)=>item.id} data={goals} renderItem={itemData=><GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>}/> 
    
     
      
    
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
  padding:50
},


});
