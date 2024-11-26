import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, Image, Button, Alert, TextInput, TouchableOpacity} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Texto from '../../componentes/Texto'; //componente de texto
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'; // Importar o Axios
import Botao from '../../componentes/Botão';

async function addListaDesejos(id, nome, preco) {

  //Produto favoritado
  const addProduto = [{
    id: id,
    nome: nome,
    preco: preco,
  }];

  //Verifica se a lista está vazia
  const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');

  if(listaDesejosSalva == null){
    //Lista vazia, insere o procuto clicado
    const listaDesejosAtulizada = JSON.stringify(addProduto);

    //Insere no AsyncStorage
    await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
    Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
    console.log("Adicionou produto");
    console.log(listaDesejosAtulizada);
  } else {
    //A lista já possui itens
    const listaDesejos = JSON.parse(listaDesejosSalva);

    //Insere mais um produto na lista
    listaDesejos.push({id: id, nome: nome, preco: preco});

    //Converte o Array para String
    const listaDesejosAtulizada = JSON.stringify(listaDesejos);

    //Insere no AsyncStorage
    await AsyncStorage.setItem('ListaDesejos', listaDesejosAtulizada);
    Alert.alert("O produto foi incluido com sucesso na Lista de Desejos!");
    console.log("Mais um produto na lista");
    console.log(listaDesejosAtulizada);
  }
}




const Index = ({ detalhes, itens }) => {
  // Estado para armazenar o termo da pesquisa e as imagens
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);

  // Função para buscar imagens do Unsplash
  const searchImages = async () => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
          Authorization: 'Client-ID dJX2cQIaxcm50rKAwMDQEggtSNq-KzbX4ZJOIugB99w', // Substitua pela sua chave
        },
        params: {
          query: searchQuery,
          per_page: 4, // Número de imagens a retornar
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Erro ao buscar as imagens', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Arsenal</Title>
              <Image source={require('../../../assets/camisa arsenal.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Arsenal 2005/06 Nike Masculina R$244,90')} />
              <TouchableOpacity onPress={() => addListaDesejos(1, 'Camisa Arsenal', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Barcelona</Title>
              <Image source={require('../../../assets/camisa barca.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Barcelona 1998/99 Nike Masculina R$244,90')} />
              <TouchableOpacity onPress={() => addListaDesejos(2, 'Camisa Barcelona', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Boca Juniors</Title>
              <Image source={require('../../../assets/camisa boca.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Boca Juniors 2020/21 Adidas Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(3, 'Camisa Boca Juniors', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Borrusia</Title>
              <Image source={require('../../../assets/camisa borrusia.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Borussia Dortmund 2012/13 Puma Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(4, 'Camisa Borussia Dortmund', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Chelsea</Title>
              <Image source={require('../../../assets/camisa chelsea.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Chelsea 2008/09 Adidas Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(5, 'Camisa Chelsea', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Fiorentino</Title>
              <Image source={require('../../../assets/camisa fiorentino.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Fiorentina 1998/99 Fila Masculina R$244,90')} />
              <TouchableOpacity onPress={() => addListaDesejos(6, 'Camisa Fiorentina', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Holanda</Title>
              <Image source={require('../../../assets/camisa holanda.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Holanda 2010 Nike  Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(7, 'Camisa Holanda', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Japão</Title>
              <Image source={require('../../../assets/camisa japao.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Japão 1998 Asics Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(8, 'Camisa Japão', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Juventus</Title>
              <Image source={require('../../../assets/camisa juvi.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Juventus 2015/16 Adidas Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(9, 'Camisa Juventus', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
        <View style={styles.column}>
          <Card>
            <Card.Content>
              <Title>Camisa Real Madrid</Title>
              <Image source={require('../../../assets/camisa real.jpg')} style={styles.image} resizeMode='contain' />
              <Button
                title="Saiba Mais"
              color="black"
              onPress={() => Alert.alert('Camisa Real Madrid 2006/07 Adidas Masculina R$244,90.')} />
              <TouchableOpacity onPress={() => addListaDesejos(10, 'Camisa Real Madrid', 'R$244,90')}>
                    <Ionicons name="heart" size={30} color="red"/>
                  </TouchableOpacity>
            </Card.Content>
          </Card>
        </View>
      </View>
      <Texto style={styles.detalhes}>Pesquise o nome do seu time e veja o que aparece</Texto>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Escreva aqui"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.listaContainer}>
        <Botao textoBotao={'Buscar Imagens'} onPress={searchImages} color="purple" />
        </View>
        {/* Exibição das imagens do Unsplash */}
        <View style={styles.imageContainer}>
          {images.length > 0 && images.map((image) => (
            <Image
              key={image.id}
              source={{ uri: image.urls.small }}
              style={styles.unsplashImage}
              resizeMode="contain"
            />
          ))}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
    flexGrow: 1,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "black",
    marginHorizontal: 10,
    marginVertical: 1,
    borderRadius: 10,
    elevation: 2,
  },
  column: {
    flex: 1,
    paddingHorizontal: 10,
  },
  halfColumn: {
    flex: 1,
  },
  image: {
    width: "40px",
    height: "40px",
    aspectRatio: 1,
    marginVertical: 2,
    marginBottom: 2,
  },
  description: {
    color: "black",
    textAlign: 'center',
  },
  price: {
    color: "black",
    textAlign: 'center',
  },
  detalhes: {
    color: "white",
    padding: 30,
  },
  input: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 4,
    backgroundColor: '#fff', // Cor de fundo branco
    color: '#000', // Cor do texto preto
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  unsplashImage: {
    width: 150,
    height: 150,
    margin: 5,
  },
  listaContainer: {
    flex: 1,
    padding: 16,
    width: 375,    
    alignSelf: 'center',
  }
});

export default Index;
