import 'react-native-gesture-handler'; 
import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import { Button, Divider,} from 'react-native-elements';


//ホーム画面

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
            width: 306,
            height: 210
          }}
          source={require('./assets/pencil.jpg')}
      />
      <Text style={styles.titlefont}>SR Workbook</Text>
      <View style={styles.buttonContainer}>
      <Button
        icon={{name:'eye', type: 'octicon'}} 
        raised
        stlle={{
          backgroundColor: "#FE434C",
          borderColor: "transparent",
          borderRadius:20,
          width: 300
        }} 
        onPress={() => navigation.navigate('List')} 
        title = "問題一覧へ"
      />
      </View>
    </View>
  );
}

//問題の分野一覧のリストを表示する
function ListScreen() {
  const navigation = useNavigation();

  const data = [
    {str: '労働基準法', key: 'Taro'},
    {str: '労働者災害補償保険法', key: 'Jiro'},
    {str: '健康保険法', key: 'Saburo'},
  ];

  return (
    <View 
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
      }}      
    >
      
      <View style={{backgroundColor:'#5bcaff'}}>
        <Text style={styles.titlefont}> 問題の一覧 </Text>
      </View>
      <Text></Text>
      <FlatList
        data={data}
        renderItem={({item})=> {
          return <View style = {styles.listItem}>
            <Text key={item.key} style={{marginBottom:10, fontSize:18}}>{item.str}</Text></View>
        }}
      />
      <Button
        icon={{name:'eye', type: 'octicon'}} 
        raised
        stlle={{
          backgroundColor: "#FE434C",
          borderColor: "transparent",
          borderRadius:20,
          width: 300
        }} 
        onPress={() => navigation.navigate('Detail')} 
        title = "問題一覧へ"
      />

    </View>
  );
}



//問題一覧のページ

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
      
      <Text></Text>
      

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
          name="List" 
          component={ListScreen} />
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
    height: 100,
    padding: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  base:{ padding:25 },
  listItem:{
    padding:18,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
  },
  listTitle:{
    fontSize:18,
    marginBottom:15,
  }
});