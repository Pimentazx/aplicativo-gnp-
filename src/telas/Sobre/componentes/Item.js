import React from "react";
import { Image, View, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto'

export default function Item({ item: { nome, imagem } }) {
    return <View key={nome} style={styles.item}>
        <Image source={imagem} style={styles.imagem} />
        <Texto style={styles.nome}>{nome}</Texto>
    </View>
}

const styles = StyleSheet.create({
    nome: {
        fontSize: 16,
        color: "black",
        lineHeight: 26,
        marginLeft: 11,
    },
    imagem: {
        width: 100,
        height: 100,
    }
})