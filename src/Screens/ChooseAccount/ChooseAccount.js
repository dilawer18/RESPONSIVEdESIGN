//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'


const ChooseAccount = () => {
    return (
        <View style={styles.container}>
            <Text>ChooseAccount</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ChooseAccount;
