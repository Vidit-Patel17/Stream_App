import React,{useState} from "react";
import { Text, StyleSheet ,View ,Button,TextInput } from "react-native";

const HomeScreen = (props) => {
  const [user,setName] = useState("Bot-Listener " + Math.floor((Math.random() * 10000) + 1));
  return <View style = {styles.center}>
      <Text style={styles.text}>App Name</Text>
      <View style = {styles.row}>
        <Button 
            onPress={() => props.navigation.navigate('userScreen',{user:user})}
            title="Join Party"
            style = {styles.leftBtn}
        />
        <Button
          onPress={() => props.navigation.navigate('hostScreen',{user: user})}
          title = "Host Party" 
          style = {styles.rightBtn}
        />
      </View>
      <View>
        <Text style={styles.userName}>Username : {user}</Text>
        <View style={styles.row}>
            <TextInput 
                style = {styles.textInput}
                autoCapitalize="none" //there are different types of capitalization
                value = {user} // value prop can be used for assigining default value to the input
                onChangeText={(newValue) => setName(newValue) }
            />
        </View>
      </View>
    </View> 
};

const styles = StyleSheet.create({
  center : {
    alignContent: 'center'
  },
  text: {
    fontSize: 30,
    marginTop: "10%",
    height : '20%',
    alignSelf: 'center', 
  },
  userName: {
    fontSize: 20,
    marginTop: "40%",
    height : '20%',
    alignSelf: 'center'
  },
  leftBtn: {
    width: '50%',
    alignSelf: 'auto',
    justifyContent: 'center',
  },
  rightBtn: {
    width: '50%',
    justifyContent: 'center',
  },
  row: {
    flexDirection: "row" ,
    justifyContent: 'space-evenly'
  },
  textInput : {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    width: "80%",
  }

});

export default HomeScreen;
