import React from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';

import Texto from '../../../componentes/Texto'; //componente de texto

const width = Dimensions.get("screen").width;

export default function Detalhes({ detalhes }) {
  return <>
    <StatusBar />
    <Texto style={styles.descricao}>{detalhes}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
  </>
}

const styles = StyleSheet.create({
  descricao: {
    fontFamily: "SpaceGRegular",
    color: "gray",
    fontSize: 16,

  },
  preco: {
    color: "#2A9F85",
    fontSize: 26,
    fontWeight: "bold",
  },
});