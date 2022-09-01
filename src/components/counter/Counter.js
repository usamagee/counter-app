import { View, Text, Button ,TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'
import Header from '../header/Header'
import { useState } from 'react'
import { style } from './CounterStyle';
import buttonPic from "../../assets/button.png" 
import reSetButton from "../../assets/resetbutton.png"

export default function Counter() {
    let counter = 0;
    const [counter2, setCounter] = useState(0)

    const reSet = () => {
        setCounter(0)
    }

    const increameantHandler = () => {
        counter = counter + 1;
        //alert("increament" + counter)

        //Using state 
        setCounter(counter2 + 1)
    }
    return (
        <View style={style.Container} >
            <View>
                <Header />
            </View>

            <View style={style.countContainer}>
                <Text style={style.countText}> {counter2}</Text>
            </View>

            <TouchableWithoutFeedback onPress={increameantHandler}>
                <View style={style.button}>
                    <Image source={buttonPic}  />
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={reSet}>
                <View style={style.buttonReset}>
                    <Image source={reSetButton}  />
                </View>
            </TouchableWithoutFeedback>



            {/* <Button title='+' style={{ width: 60 }} onPress={increameantHandler} /> */}
            {/* <Button title='Reset' style={{ width: 60 }} onPress={reSet} /> */}

           


        </View>
    )
}