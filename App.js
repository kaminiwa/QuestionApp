import 'react-native-gesture-handler'; 
import React from 'react';
import { View, Text, Image } from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import { Button } from 'react-native-paper';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Image
          style={{
            width: 256,
            height: 256
          }}
          source={require('./assets/study_picture.jpg')}
      />
      <Text style={styles.titlefont}>Home Screen</Text>
      <View style={styles.buttonContainer}>
      <Button 
        mode="contained" onPress={() => navigation.navigate('Detail')} >
          詳細へ
      </Button>
      </View>
    </View>
  );
}

function DetailScreen() {
  const navigation = useNavigation();

  return (
    <View 
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Text>Detail Screen</Text>
      <Button  
        onPress={() => navigation.navigate('Question')} mode="contained">
          詳細へ
      </Button>
      <Text></Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
      </Button>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <View style={{width:100, height:100, backgroundColor:'powderblue'}} />
        <View style={{width:100, height:100, backgroundColor:'skyblue'}} />
        <View style={{width:100, height:100, backgroundColor:'steelblue'}} />
        <View style={{width:100, height:100, backgroundColor:'powderblue'}} />
      </View>
    </View>
  );
}

function QuestionScreen() {
  return (
    <View
      style={
        styles.container
      }
    >

      <Text>Question Screen</Text>
      <Text>Question Screen 2</Text>
    </View>
  );
}

const Stack = createStackNavigator();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Home">{}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen} />
        <Stack.Screen 
          name="Question" 
          component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* stylesheets */

const styles = StyleSheet.create({
  red: {
    color: '#FF0000',
    fontSize: 24
  },
  titlefont: {
    color: '#696969',
    fontSize: 36
  },
  container: {
    margin: 72,
    padding: 16,
    // 略
  },
  buttonContainer: {
    height: 70,
    width: 100,
    padding: 10,
    backgroundColor: '#9dceff',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});