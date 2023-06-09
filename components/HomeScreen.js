import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import React, {useState, useEffect} from "react";
import Weather from "./Weather";

// api key from openweathermap
const API_KEY = 'e2ebdbc046c7256b2a833cae33659911'

const Home = ({ isEnabled }) => {
    // current state of weatcher data and function that updates it
    const [data, setData] = useState(null)    
    // current state of boolean that check if is datta loaded and function that updates it
    const [isDataLoaded, setIsDataLoaded] = useState(false)    

    const getData = async (city) => {
        try {
            setIsDataLoaded(false)
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
            if (response.status == 200) {
                const info = await response.json()
                setData(info)
            } else {
                Alert.alert('Given city does not exist')
            }
            setIsDataLoaded(true)
        } catch(error) {
            Alert.alert('Error', error.message)
        }        
    }

    useEffect(() => {
        getData('Gliwice')
    }, [])

    if (!isDataLoaded) {
        return (
            <View style={styles.container}></View>
        )
    }

    return (
        <View style={styles.container}>            
            <Weather data={data} getData={getData} isEnabled={isEnabled} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE141',
      paddingTop: 40,
    }
  });
 