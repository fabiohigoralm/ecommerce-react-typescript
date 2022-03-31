const exemplo = "[ { } [ ] ( ) ] ";

const findInv = (param) => {
    if (param == "}") return "{";
    if (param == ")") return "(";
    if (param == "]") return "[";
};
const verifyBrackets = (text) => {
    //limpa os espaços da string de entrada e espalha dentro de outro array
    const clear = text.split(" ").join("");
    const toArray = [...clear];
    //criar dois arrays auxiliares pra quardar os colchetes de abertura e de fechamento.
    var abertura = [];
    var fechamento = [];

    //percorre o array completo com todas os colchetes
    for (let i = 0; i < toArray.length; i++) {
        let index = toArray[i];

        //caso seja colchetes de abertura é adicionado ao array aulixar de abertura
        if (index == "{" || index == "(" || index == "[") {
            abertura.push(index);
        }
        //caso seja colchetes de fechamento é adicionado ao array aulixar de fechamento
        if (index == "}" || index == ")" || index == "]") {
            fechamento.push(index);

            //e quando é adicionado array axiliar de fechamento confere se o
            // caracater é complementar ou fecha o colcheter na posição anterior
            if (findInv(index) == abertura[abertura.length - 1]) {
                //caso sejam iguais é retirado cada caracter do seu array
                abertura.pop();
                fechamento.shift();
            }
        }
    }
    //caso dois arrays sejam vazios a sequencia é valida respeitando todas as regras
    if (abertura.length == 0 && fechamento.length == 0) {
        return "É uma sequência válida";
    } else {
        return "Não é uma sequência válida";
    }
};

console.log(verifyBrackets(exemplo));

