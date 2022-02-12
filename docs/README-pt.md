# 🧑🏻‍💻 DEVELOPERS TEAM 🧑🏻‍💻

_Projeto realizado como trabalho para o Sprint 3.3 do curso node.js na IT Academy Barcelona por [David](https://github.com/dmoralesl), [Eloi](https://github.com/Eloielbonnoi) e [ Daniel](https://github.com/DanielEspanadero)._

## Começando 🚀

_Estas instruções permitirão que você obtenha uma cópia de trabalho do projeto em sua máquina local para fins de desenvolvimento e teste._

### Traduções 💬

_Este arquivo README também está disponível em outros idiomas:_
- [Alemão](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-de.md)
- [Catalão](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README-cat.md)
- [Espanhol](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-es.md)
- [Francês](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-fr.md)
- [Inglês](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/README.md)
- [Italiano](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-it.md)
- [Sueco](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/README-se.md)

### Pré-requisitos 📋

_Para que o projeto funcione corretamente, é recomendável ter uma série de programas instalados e configurados corretamente:_
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js e npm](https://nodejs.org/es/)
- [MongoDB](https://docs.mongodb.com/manual/installation/)
- [MySQLServer](https://dev.mysql.com/downloads/)

### Instalação 🔧

_Lembre-se de executar o seguinte comando no terminal para instalar as dependências e que tudo funcione corretamente:_
```
npm install
```

### Variáveis ​​de ambiente .env 🪛

Para que o banco de dados MySQL funcione corretamente, um nome de usuário e uma senha são necessários para cada máquina. Para isso, você deve criar um arquivo chamado .env e configurar as variáveis ​​de ambiente MYSQL_USER e MYSQL_PASSWORD, definindo o usuário e a senha, respectivamente.

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-mysql-env.png)

## Comandos para executar ⌨️

⚠️ ANTES DE COMEÇAR, LEMBRE-SE DE INICIAR O SERVIDOR MONGODB E MYSQL ⚠️

_Uma vez que todos os programas e dependências necessários estejam instalados, basta executar o seguinte comando:_
```
npm start
```

## Execução do Projeto ⚙️

_Se você executou os passos anteriores corretamente, você verá um menu interativo, para percorrê-lo você pode usar as teclas de seta para cima ▲ e seta para baixo ▼ ou se preferir pode usar os números do teclado._

### Menu Banco de Dados 📀

_O primeiro menu que você verá é aquele que permitirá que você selecione o banco de dados que deseja usar, você pode escolher JSON, MONGODB ou MYSQL, lembre-se que para usar MONGODB ou MYSQL você precisa ter o respectivo servidor ativado._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-db.png)

### Menu principal 🗂

_Depois de escolher o banco de dados que deseja usar, você poderá visualizar o menu principal, onde poderá percorrer as diferentes opções, como criar tarefas, ler tarefas, excluir tarefas..._

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-main-menu.png)

#### Criar tarefa 📝

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-create-task.png)

#### Leia todas as tarefas 📖

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-1.png)

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-all-tasks-2.png)

#### Leia as tarefas concluídas ✔️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-completed-tasks.png)

#### Leia as tarefas pendentes ❌

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-read-pending-tasks.png)

#### Alteração pendente/concluída 🚥

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-pending-completed.png)

#### Excluir tarefa 🗑🔥🧨

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-tem-delete-task.png)

#### Comente lição de casa ✍️

![Demo](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/docs/dev-team-comment-task.png)

## Construído com 🛠️
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Linguagem de programação utilizada.
* [Node.js](https://nodejs.org/es/docs/) - Ambiente para executar JavaScript no lado do servidor.
* [NPM](https://www.npmjs.com/) - Gerenciador de dependências.
* [MongoDB](https://docs.mongodb.com/) - Banco de dados não relacional usado para o projeto.
* [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB ODM.
* [MySQL](https://dev.mysql.com/) - Banco de dados relacional usado para o projeto.
* [MySQL 2](https://www.npmjs.com/package/mysql2) - MySQL ORM.
* [Inquirer](https://github.com/SBoudrias/Inquirer.js) - Biblioteca para criar um console interativo.
* [Colorette](https://github.com/jorgebucaran/colorette) - Biblioteca para adicionar cores ao console.
* [Dotenv](https://www.npmjs.com/package/dotenv) - Biblioteca para usar variáveis ​​de ambiente.

## Versionado 📌
_Usamos versões semânticas [SemVer](http://semver.org/) paraa este aplicativo. Para todas as versões disponíveis, verifique as [tags neste repositório](https://github.com/DanielEspanadero/nodeInitialDemo/tree/dev-teams) (Observe que existem outros branches com tarefas diferentes neste mesmo repositório)._

## Autores ✒️
* [David Morales](https://github.com/dmoralesl) - *Estrutura do projeto, serviço de tarefas, repositório mongoDB e correções de bugs.*
* [Eloi el Bon Noi](https://github.com/Eloielbonnoi) - *esquema DB e repositório MySQL completo.*
* [Daniel Españadero](https://github.com/DanielEspanadero) - *Modelo de tarefas, repositório JSON, interação do usuário e documentação do projeto.*

## Licença 📄
_Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](https://github.com/DanielEspanadero/nodeInitialDemo/blob/dev-teams/LICENSE) para mais detalhes._


## Como fizemos este projeto? 📝

_Para realizar este projeto nos organizamos com a [ferramenta de projeto github](https://github.com/DanielEspanadero/nodeInitialDemo/projects/1), temos realizado reuniões semanais de acompanhamento, atribuindo tarefas e mantendo contato praticamente todos os dias via discord._

_Na primeira reunião todos concordamos em seguir o mesmo caminho na execução do projeto, também distribuímos as tarefas que cada um dos membros da equipe iria realizar e começamos a definir a estrutura._

_Para aplicar a [metodologia gitflow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) usamos dev-teams como branch de produção e dev-teams-develop como branch de desenvolvimento. A partir da ramificação de desenvolvimento, criamos as ramificações para realizar as diferentes tarefas atribuídas (para nomear as ramificações 'features' usamos 'feature/#n' onde 'n' é o número da tarefa atribuída pela ferramenta de projeto do github) e um Depois que a tarefa foi concluída e revisada, fizemos um pull request do branch 'feature/#n' para o branch 'dev-teams-develop'._

_Para realizar a estrutura do projeto tínhamos várias opções em mente, mas optamos por esta por ser a que mais se adequava ao tipo de projeto que tínhamos que realizar. Em app > helpers > transaction.js está toda a lógica da interação com o usuário feita com [inquirer](https://www.npmjs.com/package/inquirer). Em app > models > taskModel.js está o modelo de tarefas que usamos para depois fazer os esquemas e modelos dos bancos de dados, que estão na pasta de repositórios. Em app > services > taskServices.js é onde se encontram as funções responsáveis ​​por realizar um CRUD através dos provedores de banco de dados. E app > app.js é o arquivo inicial, onde vinculamos o Task Service com a interação do usuário executando-o por meio da função main()._

_Por último, mencione que temos supervisionado em todos os momentos para que tudo funcione corretamente e nas diferentes reuniões que tivemos expressamos nossas dúvidas, preocupações e ideias para melhorar o projeto._