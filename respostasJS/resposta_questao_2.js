
const exemplo1 = [4,5,44,98,4,5,6,7];
const exemplo2 = [3,2,6,3,5,3,1,2];

//Retorna array de itens duplicados.
const removeRep = (element)=>{
    const resp = []
    //Ordena array de forma alfabetica
    const noRepet = element.sort()

    //Itera sobre array
    noRepet.reduce((acc, cur) => {
        //verifica se existe valores repetidos e caso encontre,adicione item ao array de resposta.
        if (acc == cur) resp.push(acc)
        return cur;
    });
    //Retorna uma novo array apartir do array de itens repetidos,retirando os itens que foram repetidos mais que uma vez.
    return [...new Set(resp)]
}
console.log(removeRep(exemplo2))
