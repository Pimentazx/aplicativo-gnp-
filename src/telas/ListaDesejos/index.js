import React, {useState, useEffect} from "react";
import {View, FlatList, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import Texto from '../../componentes/Texto';
import ListaItem from './listaItem';
import styles from './estilos';
import Botao from '../../componentes/Botão';

export default function Index (){

    const [listData, setListData] = useState([]);

    //Função para capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if(storedObjectJSON !==null){
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject)
        }
    }

    //Carrega a lista quando o componente for montado
    useEffect(()=>{
        loadListData();
    }, []);


    // Função para ajustar os dados e sempre ter um número par de itens
    const adjustListData = () => {
        const data = [...listData];
        if (data.length % 2 !== 0) {
            data.push({ id: 'placeholder', empty: true }); // Adiciona um item vazio se o número for ímpar
        }
        return data;
    };

    const navigation = useNavigation();

    //Função para limpar a Lista de Desejos
    const clearAsyncStorage = async () => {
        await AsyncStorage.clear();
        console.log('AsyncStorage apagado com sucesso');
        Alert.alert("Lista de Desejos foi excluída com sucesso.");
        navigation.reset({index: 0, routes: [{name: 'Lista de Desejos'}]});
    }


    return <View style={styles.listaContainer}> 
        <Texto style={styles.titulo}>Lista de Desejos</Texto>
        <Texto style={styles.textoLista}>Estes são os produtos adicionados na sua Lista de Desejos</Texto>

        <FlatList
             data={adjustListData()} // Usando os dados ajustados
            renderItem={({item})=> <ListaItem {...item}/>}
            keyExtractor={({id})=>String(id)}
            numColumns={2}
        />
        <Botao textoBotao={'Apagar Lista de Desejos'} clickBotao={()=> clearAsyncStorage()}/>
    </View>
}

