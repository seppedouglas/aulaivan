const readline  = require("readline-sync");
var contas    = [];
var x = 1;


while ( x == 1){

    var entrada = readline.question("O que deseja fazer ? Cadastrar / Deposito / Saque  ");

        if ( entrada == "Cadastrar"){

            var nome = readline.question("Nome : ");
            var cpf  = readline.question("CPF : ");
            var depositoInicial = readline.question("Qual sera o  deposito Inicial ? ")

            var conta     = {
                nome: nome,
                cpf:  cpf,
                saldo: parseFloat(depositoInicial),
            }

            contas.push(conta);

            console.log(contas);
        }

        if ( entrada == "Deposito"){
            
            var nomeConta     = readline.question("Para quem deseja realizar o deposito ? ");
            var valorDeposito = readline.question("Qual valor deseja depositar ? ");

                for (i = 0; i < contas.length; i++ ){

                    if (contas[i].nome == nomeConta ){

                        contas[i].saldo = contas[i].saldo + parseFloat(valorDeposito);

                        console.log(contas)
                    }
                }
        }
        if ( entrada == "Saque"){
            
            var nomeConta     = readline.question("Quem deseja realizar o saque ? ");
            var valorSaque = readline.question("Qual valor deseja Sacar ? ");

                for (i = 0; i < contas.length; i++ ){

                    if (contas[i].nome == nomeConta ){

                        contas[i].saldo = contas[i].saldo - parseFloat(valorSaque);

                        console.log(contas)
            }

        }
        
    }
}    
