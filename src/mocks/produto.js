import Logo from '../../assets/gnp3.jpeg';
import milan2007 from '../../assets/milan2007.jpeg';
import kaka from '../../assets/kaka.jpeg';

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Milan 2007",
        logo: Logo,
        detalhes: "Camisa Milan 2007 ",
        preco: "R$ 179,00",
        botao: "Adicionar na Lista de Desejos"
    },
    itens: {
        titulo: "Itens do kit",
        lista: [
            {
                nome: "milan2007",
                imagem: milan2007,
            },
            {
                nome:"kaka",
                imagem: kaka,
            }
        ]
    }
}

export default produto;