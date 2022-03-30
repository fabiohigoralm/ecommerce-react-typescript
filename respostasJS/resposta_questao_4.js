// const exemplo = [
//   [1960, 2005],
//   [1945, 2008],
//   [1938, 1999],
// ];
const exemplo = [
    [2000, 2001],
    [2001, 2003],
    [2003, 2020],
];

let allyears = [];

//cria um novo array numerico,passando valor de entrada e saida.
const numberRange = (start, end) => {
    return new Array(end - start + 1).fill().map((_, i) => i + start);
};
//Função retorna anos mais trabalhados
const repeatedYears = (array) => {
    const objResp = [];

    //Itera sobre o array  de arrays de entrada ,
    //adicionando ao array auxiliar allyears todos anos trabalhados por todas as pessoas.
    array.forEach((element) => {
        let list = numberRange(element[0], element[1]);
        allyears = [...allyears, ...list];
    });

    //Retira todos os  anos repetidos para adicionar a lista de resposta objResp ,apartir dos anos trabalhados.
    [...new Set(allyears)].map((element) => {
        objResp.push({
            year: element,
            repeat: 0,
        });
    });
    //Itera sobre a lista com todos anos trabalhados por todas as pessoas,
    //e adiciona a lista objResp a quantidade de cada ano trabalhado.
    allyears.forEach((element) => {
        const findIndex = objResp.map((x) => x.year).indexOf(element);
        objResp[findIndex].repeat += 1;
    });


    //Criamos uma nova lista apartir da lista de objResp que ja temos a quantidade de anos trabalhos,
    //para ajudar a calcular quantificar quais os anos mais trabalhos.
    // Retornar uma lista apenas os valores das repetiçoes
    const repeatMax = objResp.map((object) => {
        return object.repeat;
    });
    //Encontra maior valor que se repete.
    const indexMax = Math.max.apply(null, repeatMax);

    //Filtra obj resposta com o valor que mais se repete.
    return objResp.filter(
        (element) => element.repeat == Math.max(indexMax)
    );

};

console.log(repeatedYears(exemplo));
