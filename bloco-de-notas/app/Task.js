import React from 'react';
import TarefaVoltar from './Components/TarefaVoltar'
import { Rating } from 'react-native-ratings';

import {
  View,
  Text,
  Button
} from 'react-native';

class Task extends React.Component{
  render(){
    return(
      <View> 
        <TarefaVoltar navigation={this.props.navigation} title={this.props.navigation.getParam('title')}/>
        <View>
          <Text style={{fontSize:30, color: 'green', fontWeight: 'bold'}}>Conteúdo</Text>
          
          <View  style={{
            width: '100%',
            height:80,
            borderColor: '#808080',
            borderWidth: 4,

            }}>
          <Text style={{marginLeft: 20}}>{this.props.navigation.getParam('description')}</Text>
          </View>
         </View>
        
        <Rating imageSize={40} readonly startingValue={this.props.navigation.getParam('value')}/>
      </View>

        // Read the params in your screen component: 
        // this.props.navigation.getParam(paramName, defaultValue).

    )
  }

}

Task.navigationOptions = {
  title: 'Task',
}

export default Task;
