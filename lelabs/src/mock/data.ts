// product list (utilizar para popular o aplicativo)

export const productList = [
    {
        id: 1,
        name: 'Conjunto de Assadeiras Quadradas',
        description: 'Para Quem Busca Praticidade Na Hora de Cozinhar, o Jogo de Assadeiras Quadradas É Perfeito! São 3 Peças em Diferentes Tamanhos: 1 Pequena de 700ml, 1 Média de 1,5l e 1 Grande de 2,4l. Práticas, Resistentes e de Fácil Limpeza. Adquira Já o Seu!',
        price: 29.99,
        image: require('../assets/assadeira.jpeg'),
    },
    {
        id: 2,
        name: 'Fritadeira Elétrica Air Fryer Inox',
        description: 'Manter Uma Alimentação Mais Saudável Ficou Ainda Mais Fácil. A Fritadeira Mondial Possui Timer com Aviso Sonoro Que Desliga o Aparelho de Forma Automática Ao Término do Preparo.',
        price: 459.99,
        image: require('../assets/fritadeira.jpeg'),
    },
    {
        id: 3,
        name: 'Ventilador de Mesa 6 Pás',
        description: 'Com 40cm e 3 Velocidades, o Ventilador de Mesa 6 Pás Super Power Garante Vento Mais Forte.',
        price: 109.99,
        image: require('../assets/ventilador.jpeg'),
    },
    {
        id: 4,
        name: 'Máquina de Café Vermelha',
        description: 'É Uma Cafeteira de Espresso e Multibebidas do Grupo 3 Corações. Automática e de Multipressão, com Extração Silenciosa, Que Garante Cafés Espressos Perfeitos, Bebidas Cremosas, Cafés Filtrados e Chás Ao Simples Toque de Um Botão.',
        price: 329.99,
        image: require('../assets/cafeteira.jpeg'),
    },
    {
        id: 5,
        name: 'Caixa Organizadora em Plástico Cristal 56l',
        description: 'Nela, É Possível Guardar Brinquedos, Livros e Objetos Variados de Forma Simples e Prática. Confeccionada em Plástico Translúcido, Ela Permite a Visualização de Seu Conteúdo, Dispensando a Etiqueta Externa e Suas Bases Largas Têm o Melhor Apoio.',
        price: 59.99,
        image: require('../assets/organizadora.jpeg'),
    },
    {
        id: 6,
        name: 'Fruteira e Saladeira de Vidro com Pé Ruvolo Gourmet Modena Redonda 32cm',
        description: 'Conheça a Fruteira e Saladeira com Pé Modelo Gourmet, da Ruvolo! Produzida em Vidro Extremamente Resistente e com Uma Delicada Aparência.',
        price: 19.99,
        image: require('../assets/fruteira.jpeg'),
    },
    {
        id: 7,
        name: 'Xícara de Chá em Porcelana Cilíndrica com Pires 200ml',
        description: 'Xícara de Chá de Porcelana Cilíndrica Branca, Tradicional e Clean Para Compor a Sua Mesa e Servir No Dia a Dia.',
        price: 19.99,
        image: require('../assets/xicara.jpeg'),
    },
]

// exemplo de carrinho (apenas para consulta):

const cart = {
    totalValue: 299.99,
    products: [
        {
            id: 6,
            name: 'Fruteira e Saladeira de Vidro com Pé Ruvolo Gourmet Modena Redonda 32cm',
            description: 'Conheça a Fruteira e Saladeira com Pé Modelo Gourmet, da Ruvolo! Produzida em Vidro Extremamente Resistente e com Uma Delicada Aparência.',
            price: 19.99,
            image: require('../assets/fruteira.jpeg'),
        },
        {
            id: 7,
            name: 'Xícara de Chá em Porcelana Cilíndrica com Pires 200ml',
            description: 'Xícara de Chá de Porcelana Cilíndrica Branca, Tradicional e Clean Para Compor a Sua Mesa e Servir No Dia a Dia.',
            price: 19.99,
            image: require('../assets/xicara.jpeg'),
        },
    ]
}