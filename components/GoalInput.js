import React,{useState} from 'react'
import {View,TextInput,Button,StyleSheet,Modal} from 'react-native'
const GoalInput = (props) => {
    const [enteredGoal,setEneterdGoal]=useState('');
    const goalInputHandler=(enteredText)=>{
        setEneterdGoal(enteredText)
      }
      const addGoalHandler=()=>{
        props.addGoalHandler(enteredGoal);
        setEneterdGoal('');
      }
      const cancelHandler=()=>{
        props.onCancel();
      }
    return (
      <Modal visible={props.show} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder ="Your Goal" style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
        <Button title="Add" onPress={addGoalHandler}/>
        </View>
        <View>
        <Button style={styles.button} title="Cancel" color="red" onPress={cancelHandler}/>
        </View>
      </View>
      </View>
      </Modal>
            
        
    )
}

const styles=StyleSheet.create({
    inputContainer:{
      flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      input:{
        width:'80%',
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:10
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%',

      },
      button:{
        width:'40%'
      }
})
export default GoalInput;
