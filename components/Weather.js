import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Dimensions, Platform} from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import DateTime from './DateTime'
import moment from 'moment'
import Item from './Item'
import SeniorItem from './seniorMode/SeniorItem'

const windowWidth = Dimensions.get('window').width;
moment.locale('pl');

const Weather = ({data, getData, isEnabled}) => {
    const {
        name,
        visibility,
        rain,
        clouds: {all},
        weather: [{icon, description}],
        main: {pressure, temp, humidity, feels_like, temp_min, temp_max},
        wind: {speed},
        sys: {sunrise, sunset},
    } = data;

    const suns = new Date(sunset*1000)
    const sunSetHours = suns.getHours()
    const sunSetMins = suns.getMinutes()
    const sunSetSecs = suns.getSeconds()
    const sunSet = `${sunSetHours}:${sunSetMins}:${sunSetSecs}`
    
    const sunr = new Date(sunrise*1000)
    const sunRiseHours = sunr.getHours()
    const sunRiseMins = sunr.getMinutes()
    const sunRiseSecs = sunr.getSeconds()
    const sunRise = `${sunRiseHours}:${sunRiseMins}:${sunRiseSecs}`

    // isEnabled = true

    if (isEnabled) {
        return (
            <SafeAreaView style={styles.container}>
            <SearchBar getData={getData} isEnabled={isEnabled}/>
            <DateTime isEnabled={isEnabled}/>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Image 
                    style={styles.icon}
                    source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
                />
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.temp}>                
                <Text style={styles.currTemp}>{temp.toFixed(0)}°C</Text>
            </View>

            <View style={styles.seniorAllInfo}>
                <SeniorItem 
                    iconPath={require("../assets/pressure.png")} 
                    factor={pressure} 
                    txt1={" hPa"} 
                    txt2={"Pressure"} 
                    isBlack={false} />
                <SeniorItem 
                    iconPath={require("../assets/clouds.png")} 
                    factor={all} 
                    txt1={" %"} 
                    txt2={"Cloudiness"} 
                    isBlack={true} /> 
                <SeniorItem 
                    iconPath={require("../assets/sunrise.png")} 
                    factor={moment(new Date(sunrise*1000)).format('HH:mm:ss')} 
                    txt1={""} 
                    txt2={"Sunrise"} 
                    isBlack={false} />
                <SeniorItem 
                    iconPath={require("../assets/sunset.png")} 
                    factor={moment(new Date(sunset*1000)).format('HH:mm:ss')} 
                    txt1={""} 
                    txt2={"Sunset"} 
                    isBlack={true} />
            </View>
        </SafeAreaView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <SearchBar getData={getData} isEnabled={isEnabled}/>
            <DateTime isEnabled={isEnabled}/>
            <View style={styles.header}>
                <Text style={styles.title}>{name}</Text>
                <Image 
                    style={styles.icon}
                    source={{uri: `http://openweathermap.org/img/wn/${icon}.png`}}
                />
            </View>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.temp}>                
                <Text style={styles.currTemp}>{temp.toFixed(0)}°C</Text>
            </View>
            <View style={styles.paragraphView}>
                <Text style={styles.paragraph}>Now it feels like {feels_like.toFixed(1)}°C, actually {temp.toFixed(1)}°C. {"\n"}
                The temperature today falls between {"\n"}{temp_min.toFixed(1)}°C and {temp_max.toFixed(1)}°C degrees.</Text>
            </View>

            <ScrollView 
                ref={(scrollView) => { this.scrollView = scrollView; }}
                style={styles.scrollView}
                horizontal= {true}
                decelerationRate={0}
                snapToInterval={windowWidth - 60}
                snapToAlignment={"center"}
                contentInset={{
                top: 0,
                left: 30,
                bottom: 0,
                right: 30,
                }}>
                <View style={styles.infoSlide}>
                    <Item 
                        iconPath={require("../assets/pressure.png")} 
                        factor={pressure} 
                        txt1={" hPa"} 
                        txt2={"Pressure"} 
                        isBlack={false} />
                    <Item 
                        iconPath={require("../assets/humidity.png")} 
                        factor={humidity} 
                        txt1={" %"} 
                        txt2={"Humidity"} 
                        isBlack={true} />
                </View>
                <View style={styles.infoSlide}>      
                    <Item 
                        iconPath={require("../assets/wind.png")} 
                        factor={(speed*3.6).toFixed(1)} 
                        txt1={" km/h"} 
                        txt2={"Wind"} 
                        isBlack={false} />
                    <Item 
                        iconPath={require("../assets/visibility.png")} 
                        factor={(visibility*0.001).toFixed(1)} 
                        txt1={" km"} 
                        txt2={"Visibility"} 
                        isBlack={true} />             
                </View>
                <View style={styles.infoSlide}>
                    <Item 
                        iconPath={require("../assets/sunrise.png")} 
                        factor={moment(new Date(sunrise*1000)).format('HH:mm:ss')} 
                        txt1={""} 
                        txt2={"Sunrise"} 
                        isBlack={false} />
                    <Item 
                        iconPath={require("../assets/sunset.png")} 
                        factor={moment(new Date(sunset*1000)).format('HH:mm:ss')} 
                        txt1={""} 
                        txt2={"Sunset"} 
                        isBlack={true} />
                </View>
                <View style={styles.infoSlide}>
                    <Item 
                        iconPath={require("../assets/temp.png")} 
                        factor={feels_like.toFixed(1)} 
                        txt1={"°C"} 
                        txt2={"Feels like"} 
                        isBlack={false} />
                    <Item 
                        iconPath={require("../assets/clouds.png")} 
                        factor={all} 
                        txt1={" %"} 
                        txt2={"Cloudiness"} 
                        isBlack={true} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Weather

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '900',
        color: '#000',
        marginTop: 10
    },
    temp: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        width: 80,
        height: 80        
    },
    currTemp: {
        fontSize: Platform.OS === 'android' ? 100 : 170,
        letterSpacing: -5,
        fontWeight: '500',
        textAlign: 'center'
    },
    description: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    paragraphView: {
        paddingLeft: 30,
        paddingBottom: Platform.OS === 'android' ? 0 : 10
    },
    paragraph: {
        fontSize: 18,
        fontWeight: '500'
    },
    infoSlide: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
        width: windowWidth - 60,   
        backgroundColor: '#FFE141',     
    },

    scrollView: {
        flexGrow: 0,
        height: 270
    },
    seniorAllInfo: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: Platform.OS === 'android' ? 250 : 300,
        alignItems: 'center'
    }
})