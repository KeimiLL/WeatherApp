import { View, Text, StyleSheet, Alert, ActivityIndicator } from "react-native";
import React, {useState, useEffect} from "react";

const Item = ({factor, txt1, txt2, isBlack}) => {
    const factor = factor
    const isBlack = isBlack
    return (           
        <View style={[styles.infoView, {if(isBlack){styles.infoBlack}}]}>
            <Image 
                style={styles.specIcon}
                source={require(`../assets/${factor}.png`)}
            />
            <Text style={[styles.infoText, {if(isBlack){styles.infoBlackText}}]}>{txt1}</Text>
            <Text style={styles.infoText}>{txt2}</Text>
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
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
    infoBlack: {
        backgroundColor: '#000',
        color: '#FFE141',
    },

  });