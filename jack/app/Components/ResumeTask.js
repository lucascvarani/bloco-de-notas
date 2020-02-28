import React from 'react';
import { Rating } from 'react-native-ratings';
import { withNavigation } from 'react-navigation';
import {
  View,
  Text,
  TouchableHighlight,
  Button,
  Image
} from 'react-native';



class ResumeTask extends React.Component{

  
    
    state = {
      title: this.props.title,
      description: this.props.description,
      value: this.props.value,
    }
  

  render(){

    const maior = '>'

    return(
      <View style={{
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 100,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        }}> 
        
        

      <View style={{flexDirection: 'row', width:'100%'}}>
        {/* <View style={{flexDirection: 'row'}}> */}
      <Text style={{fontSize: 30, textAlign: 'left', color: 'green', marginLeft: 60}}>{this.props.title}</Text>
      <View style={{position: 'absolute', right: 30}}>
      <TouchableHighlight
            onPress={() => this.props.navigation.navigate('Task', {title:this.props.title, description:this.props.description, value:this.props.value})}
            >
                <View style={{height: 45, marginRight: 10, marginLeft: 10 }}><Text style={{fontSize: 30, color: 'green'}}> {maior} </Text></View>
                
      </TouchableHighlight>
    </View>
    <View style={{position: 'absolute', right: 0}}>
     <TouchableHighlight  onPress={() => this.props.remove(this.props.title)}>
          
            <Image
              style={{width: 30, height: 30}}
              source={require('./lixeira.png')}
            />
          

      </TouchableHighlight>
      </View>
        {/* <Button onPress={() => this.props.remove(this.props.title)} title='excluir'></Button> */}
        </View>
        <View style={{marginLeft: 60}}>
          <Rating imageSize={20} readonly startingValue={this.props.value}/>
        </View>


      </View>
    )
  }

}

// Pass params to a route by putting them in an object as a second parameter to the navigation.navigate function: 
// this.props.navigation.navigate('RouteName', { /* params go here */ })



export default withNavigation(ResumeTask);
