import React from 'react';
import { StyleSheet, Image, StatusBar, Dimensions } from 'react-native';

import Logo from '../../../../assets/gnp.png';
import Texto from '../../../componentes/Texto'; //componente de texto

const width = Dimensions.get("screen").width;

export default function Detalhes({ detalhes, logo }) {
  return <>
    <StatusBar />
    <Image source={Logo} style={logo} resizeMode='contain' />
    <Texto style={styles.descricao}>{detalhes}</Texto>
  </>
}

const styles = StyleSheet.create({
  descricao: {
    fontFamily: "SpaceGRegular",
    color: "black",
    fontSize: 16,
  },

  //mudar 
  logo: {
    width: "100%",
    height: 800 / 800 * width,
  },

});