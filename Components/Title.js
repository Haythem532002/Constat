import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = ({text}) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize:30,
        color:"#ffffff",
        fontWeight:"bold",
        marginVertical:20
    },
});

export default Title;
