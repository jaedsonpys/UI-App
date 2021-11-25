import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Profile from './profile'
import Search from './search';

export default function Header() {
    return (
        <View style={styles.headerStyle}>
            <View style={styles.menuContent}>
                <View>
                    <Entypo name="menu" size={30} color="white" />
                </View>
                <View style={styles.notifyIcon}>
                    <Ionicons name="notifications-outline" size={25} color="white" />
                </View>
            </View>
            <Profile/>
            <Search/>
        </View>
    )   
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingTop: 75,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 75,
        backgroundColor: '#0059B3',
    },

    menuContent: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between'
    },

    notifyIcon: {
        alignContent: 'flex-end',
        display: 'flex'
    }
})