import React, { useState, useRef, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { Video, ResizeMode } from 'expo-av';
import video_url from '../../../assets/guime.mp4';

export default function Index({ detalhes, itens }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState(null);
  const cameraRef = useRef(null);
  const width = Dimensions.get("screen").width;

  const video = useRef(null);
  const [status, setStatus] = useState({});

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
      <Image source={detalhes.logo} style={styles.logo} resizeMode='contain' />
      <Text style={styles.detalhes}>{detalhes.detalhes}</Text>
      <Image source={itens.imagem} style={styles.imagem} resizeMode='contain' />
      
      
      
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
  },
  video: {
    width: 400,
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#8e44ad', // Cor roxa
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
});
