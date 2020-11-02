const readline = require("readline-sync");
var alunos     = [];
var continuar  = "y";

while(continuar == "y" || continuar=="Y"){

        var cont      =readline.question("deseja continuar ? y ou n ")
        continuar     = cont;

    if (continuar == "y" || continuar == "Y"){

        var nome      = readline.question("Qual seu nome ?");
        var matricula = readline.question("Qual sua Matricula ?");
        var nota1     = readline.question("Qual sua primeira nota ?");
        var nota2     = readline.question("Qual sua segunda nota ?");

            var aluno = {
                nome: nome,
                matricula: matricula,
                primeiraNota: parseFloat(nota1),
                segundaNota: parseFloat(nota2),
                media:(parseFloat(nota1) + parseFloat(nota2))/2,         
            }

        alunos.push(aluno);    

    }else if (continuar == "n" || continuar =="N"){

        console.log("     Obrigado      ")

        for(i=0; i< alunos.length; i++){

                var objetoNome = alunos[i].nome;
                var objetoMatricula = alunos[i].matricula;
                var objetoMedia     = alunos[i].media;

            console.log("Matricula : " + objetoMatricula,", Nome : " + objetoNome,", Media : " + objetoMedia);
        }

        break;
    }
}

