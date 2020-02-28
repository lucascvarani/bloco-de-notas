import React from 'react';
import NovaTarefa from './Components/NovaTarefa';
import StarRating from './Components/StarRating';
import TextBox from './Components/TextBox'
import AsyncStorage from '@react-native-community/async-storage';
// import changeData from './App'

import {
  View,
  Text,
  Button
} from 'react-native';
import ResumeTask from './Components/ResumeTask';
// import { exportDefaultSpecifier } from '@babel/types';

class AddTask extends React.Component{

  constructor(){
    super()
    this.state={
      data: [],
      title:'',
      description:'',
      rate:4,
      
      

    }
  }

  

  getTask = async () => {
    try {
      var session = await AsyncStorage.getItem('@infos')
      return JSON.parse(session)
    } catch(e) {
      console.log(e)
    }
  }

  saveTask = async () => {

    try {
      
      var data_act = await this.getTask()

      // console.log(data_act)
      const { title, description, rate: value } = this.state;
      var data = [{ title, description, value}]
      if(data_act != null){
        var concate_data = data.concat(data_act)
      }
      else{
        var concate_data = data
      }
   
      concate_data = JSON.stringify(concate_data)
      try {
        await AsyncStorage.setItem('@infos',concate_data)
      } catch (e) {
        console.log(e)
      }

    } catch(e) {
      console.log(e)
    }
    this.props.navigation.goBack()
    
    
    
  }

 

  

  changeText(text,type){
    if(type === 'Título'){
      this.setState({title:text})
    } 
    else if(type == 'Descrição'){
      this.setState({description:text})
    }
    }
  
  changeRating(rating) {
    this.setState({rate:rating})
  }


  

  render(){
    return(
      <View style={{
        marginTop: 50
        }}> 
        
        <NovaTarefa navigation={this.props.navigation} save={this.saveTask}/>
        <TextBox size="100" text="Título" changeText={this.changeText.bind(this)}/>
        <TextBox size="160" text="Descrição" changeText={this.changeText.bind(this)}/>
        <View style={{marginTop:20}}>
          <StarRating changeRating={this.changeRating.bind(this)}/>
        </View>

        <View>
        </View>
        

        
      </View>
    )
  }

}

AddTask.navigationOptions = {
  title: 'AddTask',
}
export default AddTask;
