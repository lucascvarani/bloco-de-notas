import React from 'react';
import ResumeTask from './Components/ResumeTask';
import MinhasTarefas from './Components/MinhasTarefas'
import AsyncStorage from '@react-native-community/async-storage';

import NavigationEvents from 'react-navigation'



import {
  View,
  ScrollView,
  Text,
  FlatList,
  Button,
  Platform
} from 'react-native';



class App extends React.Component{

  constructor(){
    super()
    this.state={
      data: true,
      resumeData: []
    }
  }
  

  async componentDidMount() {
    // const response = await AsyncStorage.getItem('@infos');
    // this.setState({data: JSON.parse(response)});
    // console.log(JSON.parse(response))
    this.changeData()
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("didFocus", () => {
      this.changeData()
    });
    
    
  }


  
  
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
    this.setState({resumeData:[]})
    this.setState({data:false})
  }

  remove_info = async(infoid) => {
    try{
        let infosJSON= await AsyncStorage.getItem('@infos');
        if(infosJSON != null){
          let infosArray = JSON.parse(infosJSON);
          var alteredInfos = infosArray.filter(function(e){
              return e.title !== infoid

          })
          console.log(alteredInfos)
          AsyncStorage.setItem('@infos', JSON.stringify(alteredInfos));
          
          if(alteredInfos.length === 0){
            this.clearAsyncStorage()
          }
          else{
          this.changeData()
          }
        }
    }

    catch(error){
        console.log(error)
    }
   
};


  

  changeData = async () => {
    var data =  await AsyncStorage.getItem('@infos') //.then(data => this.setState({data: JSON.parse(data)}));
    if(data != null){
      data = JSON.parse(data)
    }
    var resumeData = []
    
      if( data != null){
      
      for(var i = 0; i < data.length; i++){
        var data_act = { id: i.toString(), data: <ResumeTask  title={data[i].title} description={data[i].description} value={data[i].value} remove={this.remove_info}/>}
        resumeData.push(data_act)
      }
      this.setState({data: true})
      }
      else{
        this.setState({data:false})
      }
      this.setState({resumeData:resumeData})
    
  }

  render(){
    

    return(
      
      
    
      <ScrollView>
      {
      Platform.OS === 'ios' &&
      <View style={{height: 30}}> 
      </View>
      }
      <View style={{backgroundColor:'white'}}>
        <MinhasTarefas navigation = {this.props.navigation}/>

        {this.state.data ? 
        <View>
        <FlatList 
          data = {this.state.resumeData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            if(this.state.resumeData.lenght != 0){
              return(
              <View>{item.data}
              </View>      
              )
            }        
            }}      
        />
        <Button onPress={this.clearAsyncStorage} title='Clear All'></Button>
        </View>
        
        :
        <View>
        <Text style={{textAlign: 'center' ,fontSize:40}}>Lista Vazia</Text>
        
      </View>
      }
      
      </View>
      </ScrollView>
      
      )

  

   
  }

}

export default App;
