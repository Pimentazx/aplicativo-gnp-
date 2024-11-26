import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps'; // Importa o MapView e Marker
import { Camera } from 'expo-camera';
import { Video, ResizeMode } from 'expo-av';
import video_url from '../../../assets/guime.mp4';
import Texto from '../../componentes/Texto'

export default function Index({ detalhes, itens }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // Localizações das lojas
  const lojas = [
    { id: '1', nome: 'Loja 1', latitude: -23.55052, longitude: -46.633308 },
    { id: '2', nome: 'Loja 2', latitude: -22.9035, longitude: -43.2096 },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  const toggleCameraType = () => {
    setType((prevType) =>
      prevType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <View><Text style={styles.text}>Requesting for camera permission</Text></View>;
  }

  if (hasPermission === false) {
    return <View><Text style={styles.text}>No access to camera</Text></View>;
  }

  return (
    <ScrollView style={styles.ScrollView}>
      <Image source={detalhes.logo} style={styles.logo} resizeMode='contain' />
      <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.buttonText}>Girar Câmera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.buttonText}>Tirar Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
        {photo && <Image source={{ uri: photo }} style={styles.preview} />}
      </View>
      <Texto style={styles.titulo}>Sobre Nós</Texto>
      <Text style={styles.detalhes}>{detalhes.detalhes}</Text>
      <Texto style={styles.titulo}>Nossas Lojas </Texto>
      {/* Adiciona o mapa */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lojas[0].latitude,
            longitude: lojas[0].longitude,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        >
          {lojas.map(loja => (
            <Marker
              key={loja.id}
              coordinate={{ latitude: loja.latitude, longitude: loja.longitude }}
              title={loja.nome}
            />
          ))}
        </MapView>
      </View>

      {/* <Image source={itens.imagem} style={styles.imagem} resizeMode='contain' /> */}
      <Texto style={styles.titulo}>Vídeo</Texto>
      <Video
        ref={video}
        style={styles.video}
        source={video_url}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
  },
  ScrollView: {
    backgroundColor: "black",
  },
  imagem: {
    alignSelf: 'center',
  },
  detalhes: {
    color: "white",
    padding: 30,
    textAlign: 'center',
  },
  video: {
    width: 350,            // Definindo a largura fixa
    height: 250,           // Definindo a altura fixa (quadrado)
    borderWidth: 2,          // Adiciona borda
    borderColor: 'white',    // Cor da borda
    
    marginBottom: 20,        // Espaço inferior
    alignSelf: 'center',   // Centraliza o vídeo na tela
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    width: '100%',
    height: 300,
    justifyContent: 'flex-end',
    borderWidth: 2,          // Adiciona borda
    borderColor: 'white',    // Cor da borda
    borderRadius: 10,        // Borda arredondada (opcional)
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#8e44ad',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '40%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  preview: {
    flex: 1,
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    margin: 20,
  },
  mapContainer: {
    width: 300,           // Definindo a largura fixa
    height: 300,          // Definindo a altura fixa (quadrado)
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 2,          // Adiciona borda
    borderColor: 'white',    // Cor da borda
    borderRadius: 10,        // Borda arredondada (opcional)
    alignSelf: 'center',  // Centraliza o mapa na tela
  },
  map: {
    flex: 1,
  },
  titulo: {
    fontSize: 24, // Corrigido para 'fontSize' (S maiúsculo)
    color: 'white', // Texto branco
    textAlign: 'center',
    marginBottom: 16,
  },
});
