function buscarProduto(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1){
                resolve({id: 1, nome: "Notebook", preco: 3500});
            } else {
                reject(new Error("Produto não encontro."));
            }
        }, 1500);
    })
}

async function executar(){
    try {
        const produto = await buscarProduto(1);
        console.log("Produto encontrado"); 
        console.log(produto);
    } catch (error) {
        console.log("Ocorreu um erro");
        console.log(error.message);
    }
}

executar();