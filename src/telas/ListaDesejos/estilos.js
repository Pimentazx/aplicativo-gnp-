import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imagem: {
    width: '30%',
    height: '60%',
    alignSelf: 'center',
  },
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
  listaContainer: {
    flex: 1,
    backgroundColor: 'black', // Fundo preto
    padding: 16,
  },
  titulo: {
    fontSize: 24, // Corrigido para 'fontSize' (S maiúsculo)
    color: 'white', // Texto branco
    textAlign: 'center',
    marginBottom: 16,
  },
  textoLista: {
    fontSize: 16, // Corrigido para 'fontSize'
    color: 'white', // Texto branco
    textAlign: 'center',
    marginBottom: 16,
  },
  cardContainer: {
    width: '50%', // Definindo largura de 50% para cada card
    padding: 8, // Espaçamento entre os cards
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white', // Alterado para branco
    padding: 16,
    margin: 8,
    borderRadius: 8,
    alignSelf: 'center',
    width: '90%', // Card ocupando 90% da largura do seu container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3, // Adicionando sombra para um efeito de profundidade
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  nomeProduto: {
    color: 'black', // Texto preto no nome do produto
    fontWeight: 'bold',
    fontSize: 16, // Corrigido para 'fontSize'
    textAlign: 'center',
  },
  cardText: {
    color: 'black', // Texto preto dentro do card
    fontSize: 16,
  },
  invisibleCard: {
      backgroundColor: 'transparent', // Card invisível
      width: '90%', // Mesma largura dos cards visíveis
      margin: 8, 
      flex: 1,  
      padding: 16 ,
  },
});

export default styles;
