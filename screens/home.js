import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 38,
    },
    titleText: {
        fontFamily: 'reviewFont-bold',
        fontSize: 20,
    }
})
 
export default Home;