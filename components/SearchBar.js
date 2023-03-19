import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SearchBar = ({ getData, isEnabled }) => {
    const [city, setCity] = useState('')
    // isEnabled = true
    return (
        <View style={[styles.bar, isEnabled ? styles.barSenior : null]}>
            <TextInput 
                placeholder='Enter city name'
                value={city}
                onChangeText={(text) => setCity(text)}
                style={[styles.textInput, isEnabled ? styles.textInputSenior : null]}
            />
            <TouchableOpacity
                onPress={() => getData(city)}
                activeOpacty={0.5}>
                <Image 
                    style={[styles.icon, isEnabled ? styles.iconSenior : null]}
                    source={require('../assets/search.png')}
                />
            </TouchableOpacity>            
        </View>
    );
}

export default SearchBar;

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 3,
        paddingVertical: 8,
        borderRadius: 25,
        marginHorizontal: 15,
        marginBottom: 15,
        paddingHorizontal: 10,
        backgroundColor: '#fff4bc',
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 10
    },
    icon: {
        width: 21,
        height: 21
    },
    textInput: {
        width: '80%',
        fontSize: 17,
    },



    barSenior: {
        paddingVertical: 3,
        marginHorizontal: 15,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    iconSenior: {
        width: 27,
        height: 27
    },
    textInputSenior: {
        width: '80%',
        fontSize: 27,
    }
})