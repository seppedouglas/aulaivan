const readline  = require("readline-sync");
var pessoas     = [];
var continuar   = "y";
var continuar2  = "y";

while(continuar == "y" || continuar=="Y"){

        var cont      =readline.question("deseja continuar ? y ou n ")
        continuar     = cont;

    if (continuar == "y" || continuar == "Y"){

        var nome     = readline.question("Nome ?");
        var cpf      = readline.question("CPF : ");
        var altura   = readline.question("Qual sua altura ?");
        var peso     = readline.question("Qual seu peso ?");
        var sexo     = readline.question("Qual seu sexo ?");

            var pessoa = {
                nome: nome,
                cpf: cpf,
                altura: parseFloat(altura),
                peso:   parseFloat(peso),
                sexo:   sexo,
                imc: (peso/(altura*altura)),         
            }

        pessoas.push(pessoa);    

    }else if (continuar == "n" || continuar =="N"){

            while (continuar2 == "y" || "Y"){

                if ( resposta == "nao"){
                    break
                }

                var procurarCpf    = readline.question ("Por qual CPF deseja buscar ?");

                for(i=0; i< pessoas.length; i++){
                    
                    var buscaCpf       = procurarCpf;
                    var objetoCpf      = pessoas[i].cpf;
                    var objetoImc      = pessoas[i].imc;

                        if (buscaCpf == objetoCpf){

                            console.log("O IMC Procurado é : " + objetoImc.toFixed(2))
                            var resposta    = readline.question ("Deseja continuar ?");
                        }

                }
            
        }
    }
}
