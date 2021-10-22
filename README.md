# GIT

## Iniciando o GIT

- Para iniciar o git rodamos o comando **git init**, para que ele comece a observar todas as alterações que fizermos em nosso projeto.

- Obs.
  - Dai você tem que lembrar de abrir o git bash sempre na raiz do projeto.
  - Pra fazer isso é só fazer o que eu fiz, clicar com o botão direito dentro da pasta, e selecionar git bash

## Adicionando Alterações

- Então até aqui você já iniciou o git, agora você precisa adicionar todas as alterações. Fazemos isso através do comando **git add .**
- Quando usamos o **.** dizemos que queremos adicionar todos, mas caso você queira adicionar apenas um passamos o nome do arquivo. Exemplo:
  `git add README.md`

## Criando nossos Comits

- Comite é a marcação temporal que fazemos para que caso precisemos passamos voltar nela futuramente. Para fazer isso executamos o comando **git commit -m "Escreva a mensagem que descreve as alterações feitas"**

## Adicionando um repositório remoto

- Esses código que eu vou fazer agora aparecem no git quando vamos criar um novo repositório, então não precisa estar decorando.
- Mas o que temos que fazer é, declarar a branch
  `git branch -M main`
- Adicionar o caminho do repositório remoto, que é o endereço do seu repositório
  `git remote add origin https://github.com/Jotaset/versionamento.git`
- Com isso já podemos fazer o push para subir a aplicação
  `git push -u origin main`

## Tudo configurado

- Agora tudo já está configurado, então a partir de agora você só vai usar 3 comandos:
  - git add . (adicionar alterações)
  - git commit -m "" (para adicionar o nome da marcação)
  - git push (para subir a atualização, e você não precisa mais passar o -u origin main)