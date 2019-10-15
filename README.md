<img src="https://github.com/Elite-dos-Desenvolvedores.png?size=96" alt="Elite dos Desenvolvedores" title="Elite dos Desenvolvedores" align="right"/>

# Elite BOT

[![Discord](https://img.shields.io/discord/622160862605737990?label=Discord)][discord-invite-link]
[![GitHub stars](https://img.shields.io/github/stars/Elite-dos-Desenvolvedores/EliteBOT.svg)](https://github.com/Elite-dos-Desenvolvedores/EliteBOT/stargazers)
[![GitHub issues](https://img.shields.io/github/issues-raw/Elite-dos-Desenvolvedores/EliteBOT.svg?label=issues)](https://github.com/Elite-dos-Desenvolvedores/EliteBOT/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/Elite-dos-Desenvolvedores/EliteBOT.svg)](https://github.com/Elite-dos-Desenvolvedores/EliteBOT/commit)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

Esse é o repositório do bot Segurança, criado para o servidor Elite dos Desenvolvedores no discord.

- [Elite BOT](#elite-bot)
  - [Instalação](#instala%c3%a7%c3%a3o)
  - [Configuração](#configura%c3%a7%c3%a3o)
    - [Command](#command)
    - [Channel](#channel)
  - [Contribuições](#contribui%c3%a7%c3%b5es)
  - [Contribuidores](#contribuidores)
  - [Ajuda](#ajuda)

## Instalação
Após ter clonado o repositorio e extraido todos arquivos. tenha certeza que possui o [npm](https://www.npmjs.com/) e o [node.js 8.0.0](https://nodejs.org/en/) ou mais recente. caso estiver com tudo pronto então execute o seguinte comando no diretorio dos arquivos.

```$ npm install```

Agora, antes de iniciar o bot pela primeira vez, é necessário efetuar a configuração do bot, seguindo as instruções em [Configuração](#configura%c3%a7%c3%a3o)

Depois de tudo configurado é só usar o comando `node app.js`. Após isso, serão carregados os eventos e os comandos, e deverá ver a seguinte mensagem:

```shell
$ node app.js
[CONECTADO] A aplicação foi conectada e estabelecida com sucesso!
O Bot foi iniciado completamente com x usuarios em x servidores
```

## Configuração

O ficheiro de configuração do bot é `comandos/config.json` e deve ser criado pelo utilizador com base no `config-example.json` que se encontra na mesma pasta.

### Command

Área de configuração dos comandos.

| Opção        | Descrição                        | Tipo     |
| ------------ | -------------------------------- | -------- |
| prefix       | Prefixo para os comandos         | String   |
| cooldown     | Cooldown entre comandos          | Number   |

### Channel

Área de configuração dos canais da guilda.

| Opção        | Descrição                                   | Tipo     |
| ------------ | ------------------------------------------- | -------- |
| commands     | Canal onde é permitido executar os comandos | String   |
| greeting     | Canal de boas vindas para novos membros     | Number   |

## Contribuições

Serão aceites Pull Requests com códigos limpos e não maliciosos, sempre tendo em mente a melhoria do BOT para o servidor.

Para efetuar um Pull Request utilize a branch [`develop`](https://github.com/Elite-dos-Desenvolvedores/EliteBOT/tree/develop).

## Contribuidores

<table>
<tr>
<td align="center"><a href="https://github.com/gabrielrvita"><img src="https://github.com/gabrielrvita.png?size=100" alt="gabrielrvita" align="center"/><br/><sub><b>Gabriel Russo Vitagliano</b></sub></a></td>
<td align="center"><a href="https://github.com/TommyAlmeida"><img src="https://github.com/TommyAlmeida.png?size=100" alt="TommyAlmeida" align="center"/><br/><sub><b>Tomas Almeida</b></sub></a></td>
<td align="center"><a href="https://github.com/Heroslender"><img src="https://github.com/Heroslender.png?size=100" alt="Heroslender" align="center"/><br/><sub><b>Heroslender</b></sub></a></td>
<td align="center"><a href="https://github.com/CassioM2"><img src="https://github.com/CassioM2.png?size=100" alt="CassioM2" align="center"/><br/><sub><b>Cassio M.</b></sub></a></td>
<td align="center"><a href="https://github.com/LuanCordista"><img src="https://github.com/LuanCordista.png?size=100" alt="LuanCordista" align="center"/><br/><sub><b>ImLuan_</b></sub></a></td>
</tr>
</table>

## Ajuda

Tem alguma dúvida? Entre em nosso discord e converse com a gente [clicando aqui][discord-invite-link].

[discord-invite-link]: https://discord.gg/vZYC3Zn