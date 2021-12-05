# Desafio Técnico Mobile React Native - Le labs
 
Descrição:
 
Precisamos construir um aplicativo com as features básicas de um e-commerce onde  os usuários possam ver os produtos e criar um carrinho funcional.
Neste repositório existe um arquivo data.js com a lista de produtos e o formato dos dados que devem ser utilizados neste desafio.
 
O layout do aplicativo é livre. O layout deve apenas ser consistente e funcional.
 
Será necessário existir uma tela home com a lista de produtos e informações básicas para que os usuários consigam ver os produtos disponíveis, exibindo as informações de imagem do produto em miniatura, nome e preço.
 
Será necessário existir uma tela de detalhe do produto exibindo informações detalhadas como a imagem do produto ampliada, nome, preço e descrição. Juntamente com um botão de adicionar o item ao carrinho.
Obs: não é necessária a tratativa da quantidade do produto nesta tela. Cada clique no botão adiciona um item, caso o item já exista no carrinho, não adicione.
 
Por fim, será necessário existir a tela do carrinho onde os usuários possam visualizar os itens adicionados e excluir um item. Deve haver um botão de checkout que, ao ser clicado, organiza as informações do checkout em um payload e o exibe via console.log().
 
Todos os dados desta aplicação serão mantidos a nível de estado. Utilize gerenciamento de estados locais, Context API ou outra ferramenta que julgar necessária para o desenvolvimento.
 
Requisitos:
 
* Desenvolver uma aplicação usando React Native;
* Clonar este repositório, criar uma nova branch e abrir um pull request para a main;
 
Serão avaliados os seguintes itens:
 
* Clareza do código;
* Estrutura criada para a aplicação;
* Se os requisitos descritos acima foram atendidos;
* Se foram utilizadas as boas práticas de desenvolvimento React Native;
* Se possui descrição clara de como montar o ambiente local e realizar os testes (se houverem);
* O uso de typescript será um diferencial;
 
Em caso de dúvidas sobre o desafio, entre em contato.

## Descrição Tecnica

Foi utilizado Expo para contrução do projeto, tempolate de bare, para maior controle do codigo nativo.

Foi adicionado TypeScript.

Para especificações de libs externas, olhar o arquivo ```package.json``` na pasta ```lelabs```.

Navegação em Stack gerenciada por ```React Navigation```.

Estilização totalmente responsiva utilizando ```Styled Components``` e ```React Native Responsive Fontsize```.

Gerenciamento de estado contruido com ```Context API```.

Codigo 100% tipado incluindo Navegação.

## Executando Projeto

```shell
  yarn add --global expo-cli 
```
```shell
  cd lelabs 
```

```bash
  yarn
```
Ou

```bash
  npm install
```

Para iniciar o projeto no android:
```bash
  expo android
```

Para rodar o projeto no IOS
```bash
  expo ios
```

Não use o Expo Developer Tools para Android, pois foi feito uma alteração no gradle que ele não reconhece.


