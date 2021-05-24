import React from 'react';
import {TextInput,View,StyleSheet} from 'react-native';

const userName = ({name,nameChange}) => {
    return <View style = {styles.bar}>
        <TextInput 
            style={styles.input} 
            placeholder="username"
            value = {name}
            onChangeText = {newTerm => nameChange(newTerm)}
        />
    </View>
};

const styles = StyleSheet.create({
    bar: {
        backgroundColor: 'grey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 7,
        marginTop: 10,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        marginHorizontal: 10,
        fontSize: 18
    }
});

export default userName;