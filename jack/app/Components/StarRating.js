import React from 'react';
import { AirbnbRating } from 'react-native-ratings';
import {
    View,
} from 'react-native'



 export default class StarRating extends React.Component {
    //  constructor(){
    //      super()
    //      this.state = {
    //          ratingValue : 0,
    //      }
    //  }

    //  ratingCompleted = (rating) => {
    //     console.log("Rating is: " + rating)
    //     this.setState({ratingValue:rating})
    //     this.props.changeRating(rating)
    // }

    


     
     render(){
         const score = 0;
         return(
             <View> 
                {/* <AirbnbRating onFinishRating={ this.ratingCompleted}/> */}
                <AirbnbRating onFinishRating={ (rating) => this.props.changeRating(rating)}/>
                

                
             </View>
         )
             
         
     }
 }