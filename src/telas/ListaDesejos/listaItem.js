import React from "react";
import {View, StatusBar, TouchableOpacity, Alert} from "react-native";
import {Card} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import Texto from '../../componentes/Texto'
import styles from './estilos'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ListaItem ({id, nome, preco, empty}) {

  if (empty) {
    // Se for um item vazio, renderiza um espaço invisível
    return <View style={[styles.card, styles.invisibleCard]} />;
  } 

  const navigation = useNavigation();

  //Função para remover itens da Lista de Desejos
  async function removeProdListaDesejos(id){
    //Captura a Lista de Desejos
    const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

    //Organiza a lista de desejos em array
    const listaDesejos = JSON.parse(listaDesejosSalva);

    //Exclui o item e transfroma em string para atualizar o AsyncStorage
    const listaDesejosAtualizada = JSON.stringify(listaDesejos.filter((item)=> item.id !== id));

    //Atualiza o AsyncStorage
    await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
    Alert.alert("Produto removido da Lista de Desejos.");
    console.log("Remove item da lista.")

    //Atualiza a tela da Lista de Desejos
    navigation.reset({index:0, routes:[{name: 'Lista de Desejos'}],});

  }

    return <View style={styles.column}>
    <Card mode='contained' style={styles.card}>
      <Card.Content>
      <Texto > {preco}</Texto>
      <Texto style={styles.nomeProduto}>{nome}</Texto>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={()=>removeProdListaDesejos(id)}>
        <Ionicons name="trash" size={20} color="black"/>
      </TouchableOpacity>
      </Card.Content>
    </Card>
  </View>
    
}