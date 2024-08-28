import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar,} from 'react-native';

import Header from '../../../../assets/camisamilan.jpeg'
import Texto from '../../../componentes/Texto' //componente de texto

//Captura o tamanho da tela que esta rodando o app
const width = Dimensions.get("screen").width;

export default function Topo({titulo}) {
  return <>
    <StatusBar />
    <Image source={Header} style={styles.topo} />
    <Texto style={styles.titulo}>{titulo}</Texto>
  </>


}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 800 / 800 * width,
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "right",
    fontSize: 18,
    color: "black",
    //fontWeight: "bold",
    padding: 10,
    fontFamily: "SpaceGBold",
  },

});