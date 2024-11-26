import React, {useState, useEffect} from 'react';
import { useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Texto from './src/componentes/Texto';


import Produto from './src/telas/Produtos/';
import mock from './src/mocks/produto';

import Sobre from './src/telas/Sobre/';
import mock1 from './src/mocks/sobre';

import Prod from './src/telas/Prod/';
import mock2 from './src/mocks/prod';

import ListaDesejos from './src/telas/ListaDesejos/';


//Audio
import {Audio} from 'expo-av';



  
function MenuKit() {
  return <View>
    <Produto {...mock} />
  </View>
}

function SobreNos() { // Função nomeada como SobreNos
  return (
    <View>
      <Sobre {...mock1}/>
    </View>
  );
}

function Prods() { // Função nomeada como Prod
  return (
    <View>
      <Prod {...mock2}/>
    </View>
  );
}

function MenuAudio(){

    //Áudio para o APP
    const [audioStatus, setAudioStatus] = useState(false)
    const [sound, setSound] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      (async () => {
        console.log('status', audioStatus);
        if (audioStatus) {
          setLoading(true);
          const { sound } = await Audio.Sound.createAsync(require('./assets/ChampionsLeagueAbertura.mp3'));
          setSound(sound);
          try {
            await sound.playAsync();
          } catch (e) {
            console.log(e);
          }
          setLoading(false);
        } else {
          if (sound) {
            try {
              await sound.stopAsync();
              await sound.unloadAsync();
            } catch (e) {
              console.log(e);
            }
          }
        }
      })();
    }, [audioStatus]);
  
    return <TouchableOpacity onPress={() => { if(!loading) {setAudioStatus(!audioStatus);}}}>
              <Texto>🎧 On/Off</Texto>
            </TouchableOpacity>
  }
  
  
  
  
  
  

const Tab = createBottomTabNavigator();
function TabMenu() {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Sobre nós") {
          iconName = focused
            ? 'apps'
            : 'apps-outline';
        } else if (route.name === "Kit") {
              iconName = focused
                ? 'shirt'
                : 'shirt-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        } 

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,
    })}>
    <Tab.Screen name="Sobre nós" component={SobreNos} />
    <Tab.Screen name="Kit" component={MenuKit} />
    <Tab.Screen name="Produtos" component={Prods}/>
    <Tab.Screen name="Lista de Desejos" component={ListaDesejos} options={{unmountOnBlur : true}}/>
  </Tab.Navigator>
}



export default function App() {

  //carrega a fonte para o projeto
  const [fonteCarregada] = useFonts({
    "SpaceGRegular": SpaceGrotesk_300Light,
    "SpaceGBold": SpaceGrotesk_700Bold,
  })

  //Checa se as fontes ja foram carregadas
  if (!fonteCarregada) {
    return <View />
  }

  return <NavigationContainer>
    <TabMenu />
    <MenuAudio/>
  </NavigationContainer>
}


