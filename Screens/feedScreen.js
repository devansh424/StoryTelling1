import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class FeedScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}> 
                <Text>
                    FeedScreen
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    }
});