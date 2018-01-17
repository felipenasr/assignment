# Monte seu grupo - Assignment 1

A tarefa era desenvolver um algoritmo que dividisse os alunos da planilha em 4 grupos com níveis balanceados de alunos. 

Primeiro exportamos a planilha no formato .CSV (é importante que a planilha seja exportada nesse formata) e usamos um input para adicionar a planilha no algoritmo.

O algoritmo então criará um objeto "aluno" para cada linha da planilha, extraindo as seguintes informações:

 - ID do Aluno (para identificação)
 - Nota da prova 
 - Habilidades técnicas (html, css, js, angular, bootstrap, git, nodejs)
 
 Com essas informações o algoritmo vai atribuir uma pontuação para cada aluno baseada numa média ponderada entre nota da prova e a média entre habilidades técnicas do aluno (aqui decidimos dar um peso levemente maior às habilidades técnicas nessa pontuação). 
 Tendo cada aluno com uma pontuação geral, o programa irá ordená-los do melhor para o pior e começar a distribuir um por vez em cada um dos quadro grupos, garantindo assim que os 4 melhores ficarão em 4 grupos diferentes, e os próximos 4 melhores em 4 grupos diferentes e assim por diante.
 
 Observações: 
  - Esse algoritmo funciona com planilhas apenas no formato CSV.
  - A planilha deve estar organizada no formato de colunas que está no exemplo de planilha neste git.
  - O algoritmo irá tentar formar sempre 4 grupos iguais, independente da quantidade de alunos passada.
  - É permitido qualquer número de alunos. 
