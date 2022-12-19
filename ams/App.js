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
/*
import React,{useState} from 'react';
import { Button,Text, View, StyleSheet } from 'react-native';

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
/*
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

export default myButtons;*/
/*
import * as React from 'react';
import {Button,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;*/
/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const tab = createBottomTabNavigator();
function AccueilScreen() {
  return (<View style={styles.container}>
    <Text>Welcome to REACT native</Text>
    <StatusBar style="auto" />
  </View>);
}

function ContactScreen() {
  return (<View style={styles.container}>
    <Text>Leave a message here</Text>
    <StatusBar style="auto" />
  </View>);
}

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator>
       <tab.Screen name="Home" component={AccueilScreen} options={{ title: 'Accueil' }}/> 
       <tab.Screen name="Contact" component={ContactScreen} options={{ title: 'Call us' }}/> 
      </tab.Navigator>
    </NavigationContainer>
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
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
const tab = createBottomTabNavigator();
function AccueilScreen() {
  return (<View style={styles.container}>
    <Text>Welcome to REACT native</Text>
    <StatusBar style="auto" />
  </View>);
}

function SettingScreen() {
  return (<View style={styles.container}>
    <Text>Vos paramètres</Text>
    <StatusBar style="auto" />
  </View>);
}

export default function App() {

  return (
    <NavigationContainer>
      <tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;
            if (route.name == "Home") { iconName = "home-outline"; color='red';size='20px'}
            else if (route.name == "Setting") { iconName = "settings-outline"; color='red',size='large'}
        

            return (
              <Ionicons
                name={iconName}
                color={color}
                size={size}
              />
            );
          },
        })}
      >
        <tab.Screen name="Home" component={AccueilScreen} />
        <tab.Screen name="Setting" component={SettingScreen} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/


/*
import React, { useState } from "react";
import { SafeAreaView, Button, Text, View, Image, FlatList, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
 
const DATA = [
 
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    firstName: 'Dimitri',
    lastName: 'CERRATOPS',
    description: "User 1 : Lorem ipsum",
 
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    firstName: 'Sarah',
    lastName: 'FISTOL',
    description: "User 2 : Lorem ipsum",
  },
  {
 
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    firstName: 'Hervé',
    lastName: 'LOCIRAPTOR',
    description: "User 3 : Lorem ipsum",
  },
 
];
 
const Item = ({ item, onPress, backgroundColor, textColor }) => (
<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
<View style={{flexDirection: 'row'}}>
      
<View>
<Text style={[styles.title, textColor]}>{item.firstName}</Text>
<Text style={[styles.title, textColor]}>{item.lastName}</Text>
</View>
</View>  
</TouchableOpacity>
);
 
const HomeScreen = ({ navigation }) => {
  return (
<SafeAreaView style={styles.container}>
<Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' , adresse:'Paris'})
        }
      />
<Button
        title="Our Users"
        onPress={() =>
          navigation.navigate('User')
        }
      />
</SafeAreaView>
  );
};
 
const ProfileScreen = ({ navigation, route }) => {
  return (
<SafeAreaView style={styles.container}>
<Text>This is {route.params.name}'s profile</Text>
<Text>This is {route.params.adresse}</Text>
</SafeAreaView>)
  ;
};
 
const UserScreen = ({navigation}) => {
 
  const [selectedId, setSelectedId] = useState(null);
 
  const renderItem = ({ item }) => {
 
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';
 
    return (
<Item 
        item={item}
        onPress={() => navigation.navigate('UserDetails', {userId: item.id})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    )
 
  };
 
  return (
<SafeAreaView style={styles.container}>
<Text>Our Users:</Text>
<FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
</SafeAreaView>
  );
};
 
const UserDetails = ({navigation, route}) => {
  return (
<SafeAreaView style={styles.container}>
<Text>User: {route.params.userId}</Text>
</SafeAreaView>
  );
}
 
const Nav = () => {
  return (
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen}/>
<Tab.Screen 
          name="Profile"
          component={ProfileScreen} 
          initialParams={{ name: 'Jane' , adresse:'Paris'}}
        />
<Tab.Screen name="User" component={UserScreen} options={{ title: 'Our Users' }} />
</Tab.Navigator>
  )
}
 
const App = () => {
  return (
<NavigationContainer>
<StatusBar
        animated={true}
        backgroundColor="#f9c2ff" />
<Stack.Navigator>
<Stack.Screen name="Nav" component={Nav} options={{ title: 'Home', headerShown: false }}/>
<Stack.Screen name="UserDetails" component={UserDetails}  options={{ user: 1 }}/>
</Stack.Navigator>
</NavigationContainer>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 24,
  },
  picture: {
    height: 100,
    width: 100,
    marginRight: 16
  },
});
 
export default App;*/

// TP chat
/*
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';

const App = () => {

  const[img, setImg]=useState(' ');
  const getCat = () => {
    fetch('https://aws.random.cat/meow').then(
      (res) => { return res.json() }).then(data => { 
        console.log(data) ;
        setImg(data.file);
      })
  }
    
  //getCat();

  return (
    <View style={styles.container}>
    <Text>Cliquer ici pour avoir un chat</Text>
    <Image source={{uri: img}} style={styles.img}/>
    <Button
      onPress={getCat}
      title="Nouveau Chat"
      color="#f00"
      />
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: '80%',
    height:'60%',
    marginBottom:'5%',
    marginTop:'5%',
  }
});

export default App;
*/
/*
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;*/
/*
import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;


*/

import React, { useState } from "react";
import {View,Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

 

  const DATA = [

    {
  
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      img: "https://fr.shopping.rakuten.com/photo/2089682361_ML.jpg",
      titre:'A31',
      prix: "200€",
      description: "Smart Phone Samsung Caméra 48 px, Ram 2 Go",
      qtestock: "20",

    },
    {
  
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc",
      img: "https://fr.shopping.rakuten.com/photo/2089682361_ML.jpg",
      titre:'A33',
      prix: "300€",
      description: "Smart Phone Samsung Caméra 64 px, Ram 4 Go",
      qtestock: "30",

    }
    ,
    {
  
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd",
      img: "https://fr.shopping.rakuten.com/photo/2089682361_ML.jpg",
      titre:'A53',
      prix: "400€",
      description: "Smart Phone Samsung Caméra 128 px, Ram 8 Go",
      qtestock: "10",

    }

  ];

const Item = ({ item, onPress, backgroundColor, textColor }) => (

  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.row}>
        <Image style={styles.logo}  source={{ uri: item.img}}/>
        <View style={styles.col}>
          <View style={styles.col2}>
                <View style={[{flexDirection:'row'},styles.nomstock]}>
                    <Text style={[styles.titreProduit,textColor]}>Titre : {item.titre}</Text>
                    <Text style={[styles.prixProduit,textColor]}>Prix : {item.prix}</Text>
                </View>
                <View style={[styles.description]}>
                <Text style={[textColor]}>
                   {item.description}
                  </Text>
                </View>
            
            <Text  style={[styles.nomstock,textColor]}>Quantité dispo : {item.qtestock}</Text>
           </View>
        </View>
     </View>
  </TouchableOpacity>


);

const App = () => {
 
  const [selectedId, setSelectedId] = useState(null);

  const monItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={monItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal:6
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titreProduit:{flex : 0.7},
  prixProduit:{flex : 0.3, marginHorizontal:10},
  title: {
    fontSize: 18,
  },
  nomstock:{ flex:0.15},
  description:{ 
    flex:0.5
  },
  row: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flex:0.6,
    flexDirection: "column",
    flexWrap: "wrap",
    marginHorizontal:10
  },
  col2: {
    flex:1,
    flexDirection: "column",
    flexWrap: "wrap",
    marginHorizontal:10
  },
  logo: {
    flex:0.4,
    width: 150,
    height: 150,
  },
});

export default App;
