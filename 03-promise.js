function preparaPedido(){
    return new Promise((resolve, reject) => {
        temPao = true
        setTimeout(() => {
            if(temPao){
                resolve("Hamburguer pronto");
            } else {
                reject(new Error("Hamburguer foi pro caraio"));
            }
        }, 2000)
    })
}

preparaPedido().then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.error(erro.message);
});