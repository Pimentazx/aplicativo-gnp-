import React from 'react';
import { StyleSheet, Image, StatusBar, View, Alert} from 'react-native';

import Logo from '../../../../assets/gnp3.jpeg'
import Texto from '../../../componentes/Texto' //componente de texto
import Botao from '../../../componentes/Botão'



export default function Detalhes({ nome, detalhes, preco, botao }) {
  return <>
    <StatusBar />
    <View style={styles.produto}>
      <View style={styles.logotipo}>
        <Image source={Logo} style={styles.logo} resizeMode='contain' />
        <Texto style={styles.nome}>{nome}</Texto>
      </View>
      <Texto style={styles.descricao}>{detalhes}</Texto>
      <Texto style={styles.preco}>{preco}</Texto>
      <Botao textoBotao={botao} clickBotao={()=>{Alert.alert("Em breve!","Estamos preparando uma nova função para esse site")}}/>
    </View>
  </>

}

const styles = StyleSheet.create({
  produto: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontFamily: "SpaceGBold",
    color: "purple",
    fontSize: 26,
    //fontWeight: "bold",
    paddingTop: 15,
    paddingLeft: 10,
  },
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
  logo: {
    width: 60,
    height: 60,
  },

  logotipo: {
    flexDirection: "row",

  },
  botao: {
    marginTop: 10,
    backgroundColor: "purple",
    paddingVertical: 16,
    borderRadius: 6,
  },
  botaoTexto: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }
});