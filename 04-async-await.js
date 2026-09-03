function preparaPedido(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 2 * 60 * 1000);
    })
}

async function fazerPedido(){
    console.log("Pedido realizado!");

    const pedido = await preparaPedido();

    console.log(pedido);
    console.log("Pedido Entregue!");
}

fazerPedido();