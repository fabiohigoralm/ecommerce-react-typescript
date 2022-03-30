const exemplos = [
    12345678, 1223455678, 876543210, 152456457, 12356789, 13579, 9765421,
    123454321, 12222222, 2111111, 1599,
];
//Ordenar valor de forma crescente
const alpha_sort = (data) => {
    return data.toString().split("").sort().join("");
};
//Ordenar valor de forma decrescente
const alpha_sort_dec = (data) => {
    return data.toString().split("").sort().reverse().join("");
};
//Cria novo array sem repetições
const clearRep = (item) => {
    return [...new Set(alpha_sort(item))];
};

const objResp = [];
const verifySort = (data) => {
    const ordena_alpha = alpha_sort(data);
    const ordena_alpha_rever = alpha_sort_dec(data);

    //1-Primeira validação ,verifica o valor de entrada esta ordenado
        //Caso ordenado:
    if (data == ordena_alpha || data == ordena_alpha_rever) {
        let aux = false;

        //Cria copia do array ordenado ,retirando os valores repetidos e transformando em number.
        const verify = clearRep(ordena_alpha).map((x) => parseInt(x));

        //Itera sobre o array criada verificando a variação do digito.
        //Caso encontre variação maior que 1 ,a variavel de sinalização aux sera true.
        verify.reduce((acc, cur) => {
            if (acc + 1 < cur) aux = true;
            return cur;
        });
        //A depender a variavel de sinalização é adicionado uma resposta.
        if (!aux) {
            objResp.push({ [`${data}`]: "Está ordenado" });
        } else {
            objResp.push({ [`${data}`]: "Não Está ordenado" });
        }

        //Caso não ordenado.
    } else {
        objResp.push({ [`${data}`]: "Não Está ordenado" });
    }
};

//Para cada elemento do arary é aplicado a função :
exemplos.forEach((element) => verifySort(element));
console.log(objResp);
