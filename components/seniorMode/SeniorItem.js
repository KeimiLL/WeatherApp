import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
// item in senior view
const SeniorItem = ({iconPath, factor, txt1, txt2, isBlack}) => {
    return (           //properly added styling for black and light elements
        <View style={[styles.infoView, isBlack ? styles.infoBlack : null]}>
            <Image 
                style={styles.specIcon}
                source={iconPath}
            />
            <Text style={[styles.infoText, isBlack ? styles.infoBlackText : null]}>{txt2}</Text>
            <Text style={[styles.infoText, isBlack ? styles.infoBlackText : null]}>{factor}{txt1}</Text>
            
        </View>
    )
}

export default SeniorItem;

const styles = StyleSheet.create({
    infoView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        borderColor: '#000',
        borderWidth: 4,
        padding: 0,
        borderRadius: 15,
        justifyContent: 'space-between',
        height: Platform.OS === 'android' ? 60 : 70,
        backgroundColor: '#FFE141',
        padding: Platform.OS === 'android' ? 5 : 10,

        shadowColor: '#000',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    specIcon: {
        height: 50,
        width: 50,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 28
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