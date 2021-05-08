import React from 'react';
import {Text ,View ,Button,StyleSheet} from 'react-native';

const hostScreen = ({navigation}) => {
    const user = navigation.getParam('user') + " {Host}";
    const partyName = "Party " + Math.floor((Math.random()*100)+1);
    return(
        <View>
            <Text style={styles.Title}>{partyName}</Text>
            <View style = {styles.userListStyle}>
                <Text style = {styles.user,styles.active}> {user} </Text>
                <Text style = {styles.user}> Manak </Text>
                {/* loop to print all the users preset */}
            </View>
            <Button
                title = "Mute"
                onPress = {() => {
                    //Mute Audio
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Title:{
        fontSize: 30,
        alignSelf: "center",
        marginTop: "3%",
        marginBottom: "3%"
    },
    userListStyle: {
        height: "65%",
        borderWidth: 1,
        width: "89%",
        alignSelf: "center",
        marginBottom: "10%"
    },
    user: {
        borderWidth: 1,
        width : "100%",
        borderColor: '#a9a9a9'  
    },
    active: {
        color: "red"
    },
});

export default hostScreen