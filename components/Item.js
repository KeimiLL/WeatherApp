import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
// item in normal view
const Item = ({iconPath, factor, txt1, txt2, isBlack}) => {
    return (           //properly added styling for black and light elements
        <View style={[styles.infoView, isBlack ? styles.infoBlack : null]}>
            <Image 
                style={styles.specIcon}
                source={iconPath}
            />
            <Text style={[styles.infoText, isBlack ? styles.infoBlackText : null]}>{factor}{txt1}</Text>
            <Text style={[styles.infoText, isBlack ? styles.infoBlackText : null]}>{txt2}</Text>
        </View>
    )
}

export default Item;

const styles = StyleSheet.create({
    infoView: {
        marginTop: Platform.OS === 'android' ? 30 : 50,
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