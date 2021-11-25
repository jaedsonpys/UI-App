import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Profile() {
    return (
        <View style={styles.profileContent}>
            <View style={styles.profileImage}></View>
            <View style={styles.infoProfile}>
                <Text style={styles.infoProfileMessage}>Hello</Text>
                <Text style={styles.infoProfileName}>Jaedson</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    profileContent: {
        paddingTop: 20,
        flexDirection: 'row'
    },

    profileImage: {
        width: 55,
        height: 55,
        borderRadius: 10,
        backgroundColor: 'white',
    },

    infoProfile: {
        marginLeft: 15,
        height: '100%',
        justifyContent: 'center'
    },

    infoProfileMessage: {
        color: 'white',
        fontSize: 13,
        marginBottom: 3
    },

    infoProfileName: {
        color: 'white',
        fontSize: 23,
        fontWeight: 500
    }
})