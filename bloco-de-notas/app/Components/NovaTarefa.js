import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const voltar = '<'

class NovaTarefa extends React.Component{

    

  render(){
    return(
      <View style={{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        }}> 

        <View style={{marginLeft: 5}}>
            <TouchableHighlight
            
            onPress={() => this.props.navigation.goBack()}
            >
                <View style={{backgroundColor: 'white', height: '100%'}}><Text style={{fontSize: 40, color: 'orange'}}> {voltar} </Text></View>
                
            </TouchableHighlight>
        </View>

        <View style={{marginLeft: 20}}><Text style={{textAlign: 'center', textAlignVertical: 'center', fontSize: 40, color: 'orange'}}>Nova Tarefa</Text></View>
        
        <View style={{marginLeft: 20}}>
            <TouchableHighlight
            
            onPress={() => this.props.save()}
            >
                <View style={{backgroundColor: 'white', height: '100%'}}><Text style={{fontSize: 40, color: 'blue'}}> Add </Text></View>
                
            </TouchableHighlight>
        </View>
        
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
  });

export default NovaTarefa;
