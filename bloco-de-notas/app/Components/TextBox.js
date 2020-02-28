import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';

class TextBox extends React.Component{
    constructor() {
        super()
        this.state={
            input:'',
        }
    }
  render(){

    const maior = '>'

    return(
      <View style={{
        flexDirection: 'column',
        backgroundColor: 'white',
        height: Number(this.props.size),
        width: '80%',
        marginLeft: '10%',
        marginTop: '10%',
        borderColor: '#808080',
        borderWidth: 4,
        
        }}> 
        <Text style={{fontSize: 25, color: 'green', fontWeight: 'bold' }}> {this.props.text}</Text>
        
        <TextInput
        onChangeText={(text) => this.props.changeText(text, this.props.text)}>

        </TextInput>
      </View>
    )
  }

}

export default TextBox;
