import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Search() {
    return (
        <View style={styles.searchContent}>
            <View style={styles.searchInput}>
                <TextInput placeholder='Search' style={styles.textInput}/>
                <View style={styles.searchIcon}>
                    <Ionicons name="search" size={24} color="#868695" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContent: {
        marginTop: 30
    },

    searchInput: {
        backgroundColor: '#E0E0F9',
        
        paddingTop: 5,
        paddingBottom:5,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textInput: {
    }
})