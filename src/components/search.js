import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Search() {
    return (
        <View style={styles.searchContent}>
            <View style={styles.searchInput}>
                <TextInput placeholder='Search'/>
                <View style={styles.searchIcon}>
                    <Ionicons name="search" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})