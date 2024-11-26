import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
  //define a estilização padrão do campo
  let estilo = styles.texto;

  //verifica se deve exibir a fonte em negrito
  if (style?.fontWeight == "bold") {
    //negrito, muda a estilização
    estilo = styles.textoNegrito;
  }

  return <Text style={[style, styles.texto]}>{children}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontFamily: "SpaceGRegular",
  },
  textoNegrito: {
    fontFamily: "SpaceGBold",
  },
});
