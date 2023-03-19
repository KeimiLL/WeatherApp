import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, Dimensions} from 'react-native'
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

    if (isEnabled) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Dziala</Text>
            </SafeAreaView>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <SearchBar getData={getData}/>
            <DateTime />
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
                    {/* <View style={styles.infoView}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/pressure.png')}
                        />
                        <Text style={styles.infoText}>{pressure} hPa</Text>
                        <Text style={styles.infoText}>Pressure</Text>
                    </View> */}
                    <Item iconPath={require("../assets/pressure.png")} factor={pressure} txt1={" hPa"} txt2={"Pressure"} isBlack={false} />
                    {/* <View style={[styles.infoView, styles.infoBlack]}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/humidity.png')}
                        />
                        <Text style={[styles.infoText, styles.infoBlackText]}>{humidity} %</Text>
                        <Text style={[styles.infoText, styles.infoBlackText]}>Humidity</Text>
                    </View> */}
                     <Item iconPath={require("../assets/humidity.png")} factor={humidity} txt1={" %"} txt2={"Humidity"} isBlack={true} />
                </View>
                <View style={styles.infoSlide}>                    
                    <View style={styles.infoView}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/wind.png')}
                        />
                        <Text style={styles.infoText}>{(speed*3.6).toFixed(1)} km/h</Text>
                        <Text style={styles.infoText}>Wind</Text>
                    </View>
                    <View style={[styles.infoView, styles.infoBlack]}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/visibility.png')}
                        />
                        <Text style={[styles.infoText, styles.infoBlackText]}>{(visibility*0.001).toFixed(1)}km</Text>
                        <Text style={[styles.infoText, styles.infoBlackText]}>Visibility</Text>
                    </View>
                </View>
                <View style={styles.infoSlide}>
                    <View style={styles.infoView}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/sunrise.png')}
                        />
                        <Text style={styles.infoText}>{moment(new Date(sunrise*1000)).format('HH:mm:ss')}</Text>
                        <Text style={styles.infoText}>Sunrise</Text>
                    </View>
                    <View style={[styles.infoView, styles.infoBlack]}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/sunset.png')}
                        />
                        <Text style={[styles.infoText, styles.infoBlackText]}>{moment(new Date(sunset*1000)).format('HH:mm:ss')}</Text>
                        <Text style={[styles.infoText, styles.infoBlackText]}>Sunset</Text>
                    </View>
                </View>
                <View style={styles.infoSlide}>
                    <View style={styles.infoView}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/temp.png')}
                        />
                        <Text style={styles.infoText}>{feels_like.toFixed(1)}°C</Text>
                        <Text style={styles.infoText}>Feels like</Text>
                    </View>
                    <View style={[styles.infoView, styles.infoBlack]}>
                        <Image 
                            style={styles.specIcon}
                            source={require('../assets/clouds.png')}
                        />
                        <Text style={[styles.infoText, styles.infoBlackText]}>{all} %</Text>
                        <Text style={[styles.infoText, styles.infoBlackText]}>Cloudiness</Text>
                    </View>
                </View>
            </ScrollView>

            <View>
                <Text>Switch to señor mode</Text>
            </View>
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
        fontSize: 160,
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
        paddingBottom: 10
    },
    paragraph: {
        fontSize: 16,
        fontWeight: '500'
    },
    infoSlide: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 7,
        width: windowWidth - 60,   
        backgroundColor: '#FFE141',     
    },
    infoView: {
        marginTop: 50,
        width: 150,
        borderColor: '#000',
        borderWidth: 4,
        padding: 0,
        borderRadius: 15,
        justifyContent: 'center',
        height: 150,
        backgroundColor: '#FFE141',

        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    infoBlack: {
        backgroundColor: '#000',
        color: '#FFE141',
    },
    specIcon: {
        height: 50,
        width: 50,
        marginLeft: 46,
        marginBottom: 10,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 18
    },
    infoBlackText: {
        backgroundColor: '#000',
        color: '#FFE141',
    },

    scrollView: {
        height: 100
    }
})