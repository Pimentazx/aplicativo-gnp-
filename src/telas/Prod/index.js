import React from 'react';
import { ScrollView, View, StyleSheet, Text, Image, Button, Alert, TextInput} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Texto from '../../componentes/Texto'; //componente de texto





const Index = ({ detalhes, itens }) => {
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
            </Card.Content>
          </Card>
        </View>
      </View>
      <Texto style={styles.detalhes}>Qual produto você gostaria de ver na nossa loja:</Texto>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escreva aqui"
        placeholderTextColor="#888" // Cor do texto do placeholder
      />
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
});

export default Index;
