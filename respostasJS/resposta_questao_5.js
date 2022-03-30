//Função fatorial tambem usada em analises combinatorias.
//Deve se informar o numeros de posições e a função retorna a quantidade de combinações existentes.
//Exemplo caso informe o valor 4 a função deve processar a resposta desta forma:
//Resp = 4 * 3 * 2 * 1 ,sempre o ultimo numero sendo 1,e o primeiro o numero informado no parametro de entrada.
//Foi usado a recursividade ,aonde criamos um if com uma condição de parada,
//e caso nossa função não caia na condição de parada chamamos a função novamente multiplicando 
//item atual pelo retorno da função com valor incrementado negativamente e assim por diante.  
//

const fatorial = (num1)=>{
    if(num1===0){
    return 1;
    }
    return num1*fatorial(num1-1);
    }

console.log(fatorial(5))