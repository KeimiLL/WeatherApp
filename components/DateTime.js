import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, {useState, useEffect} from "react";
import dayjs from "dayjs";

const windowWidth = Dimensions.get('window').width;

//component displaying the date and time in the application
const DateTime = ({ isEnabled }) => {
    const [currDate, setCurrDate] = useState(dayjs()) //stored state with hook so I can change up data every 60 secs
    const weekDays = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
    const months = [ "January", "February", "March", "April", 
                    "May", "June", "July", "August", "September", "October", 
                    "November", "December" ]

    // isEnabled = true

    useEffect(() => {
        const interval = setInterval(() => {
        //     const date = new Date().getDate(); //Current Day
        //     const day = new Date().getDay(); //Current Day
        //     const month = new Date().getMonth(); //Current Month
        //     const hour = new Date().getHours();
        //     const mins = new Date().getMinutes();
        //     const secs = new Date().getSeconds();
        //     setCurrDate(
        //         hour + ":" + mins + ":" + secs + " / " +  weekDays[day] + ', ' + date + ' ' + months[month] 
        //     );
        setCurrDate(dayjs());
        }, 1000 * 60)
        
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.dateInfo}>
                <Text style={[styles.dateInfoText, isEnabled ? styles.dateInfoTextSenior : null]}>{currDate.format("HH:mm")}</Text>        
            </View>
            <View style={styles.dateInfo}>
                <Text style={[styles.dateInfoText, isEnabled ? styles.dateInfoTextSenior : null]}>{currDate.format("dddd, DD MMMM")}</Text>            
            </View>
        </View>        
    )
}


export default DateTime;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dateInfo: {        
        backgroundColor: '#000',        
        borderRadius: 15,
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10,
    },
    dateInfoText: {   
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 15,
        color: '#FFE141',
        fontSize: 20
    },


    dateInfoTextSenior: {
        fontSize: Platform.OS === 'android' ? 20 : 30
    }
})