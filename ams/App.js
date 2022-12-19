/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello PLB</Text>
      <Button title={"Hello"} onPress={() => {
        console.log("clicked");
        console.warn("Btn Clicked")
      }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
/*
import React from 'react';
import { StyleSheet,View, Text, Image, ScrollView, TextInput, SafeAreaView } from 'react-native';

const App = () => {
  return (

    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title1Text}>PLB</Text>
        <Text style={styles.title1Text}>Consultant</Text>
      </View>
      <View style={{flex:0.6}}>
        <View style={styles.textStyle}>
        <Text style={styles.title2Text}>Formation REAN</Text>
        </View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 20,
          borderColor: 'gray',
          borderWidth: 1,
          flex:0.2,
          marginBottom: 100,
        }}
        defaultValue="You can type in me"
      />
    </View>
    
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    direction:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
,
  title1Text: {
    flex:0.2,
    marginTop: 200,
    fontSize: 16,
    //fontWeight: "bold",
    //fontFamily: 'DancingScript-Regular',
  }
,
  title2Text: {
    fontSize: 12,
    //fontWeight: "bold",
   // fontFamily: 'DancingScript-Regular',
  }
});*/

/*
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 2, backgroundColor: "darkorange" }} />
      <View style={{ flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

export default Flex;*/

import React,{useState} from 'react';
import { Button,Text, View, StyleSheet } from 'react-native';
/*
const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (params) => {
  return (
    <View style={styles.center}>
      <Text>Hello {params.firstname}!  {params.lastname}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting firstname='Amine' lastname='Mezghich' />
      <Greeting firstname='Mohamed' lastname='Mezghich'/>
      <Greeting firstname='Med Amine' lastname='Mezghich' />
    </View>
  );
}

export default LotsOfGreetings;*/

//Correction Exo

const CustomButton = ({onPress, text,color}) => {
  return (
    <View>
      <Text>{text}</Text>
      <Button  onPress={onPress} title={text} color={color}/>
    </View>
  )
}


const myButtons = () => {

  const [count,setCount] = useState(0);
  const [formation,setFormation] = useState("React");
  return (
    <View>
      <CustomButton onPress={()=>console.log("Rouge")} color={'red'} text="Btn red" />
      <CustomButton onPress={()=>console.log("Vert")} color={'green'} text="Btn vert" />
      <CustomButton onPress={()=>console.log("Orange")} color={'orange'} text="Btn Orange" />

      <Button onPress={
                    () => {
                      setCount(count + 1);
                      setFormation("REAN");
                    }
      } 
      title="Increment"/> 
      
      <Button onPress={() => setCount(count - 1)} title="Decrement"/> 
      <Text>Valeur de count : {count}</Text>
      <Text>Formation initiale : {formation}</Text>
    </View>
  );
}

export default myButtons;