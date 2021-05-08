import React,{useState} from "react";
import { Text, StyleSheet ,View ,Button,TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import UserName from '../components/userName';

const HomeScreen = ({navigation}) => {
  const [user,setName] = useState("Bot-Listener " + Math.floor((Math.random() * 10000) + 1));
  return <View style = {styles.center}>
      <ScrollView>
        <Text style={styles.text}>AppName</Text>
        <View style = {styles.row}>
          <Button 
              onPress={() => navigation.navigate('userScreen',{user:user})}
              title="Join Party"
              style = {styles.leftBtn}
          />
          <Button
            onPress={() => navigation.navigate('hostScreen',{user: user})}
            title = "Host Party" 
            style = {styles.rightBtn}
          />
        </View>
        <View>
          <Text style={styles.userName}>Username : {user}</Text>
          <View style={styles.row}>
            <UserName
              name = {user}
              nameChange = {newTerm => setName(newTerm) }
            />
          </View>
        </View>
      </ScrollView> 
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
    justifyContent: 'space-evenly',
    marginTop: "10%"
  },
  textInput : {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    width: "80%",
  }

});

export default HomeScreen;
