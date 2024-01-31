import { Catalogo } from "../models/Catalogo.model.js";

let listaCatalogo = [];

function criarCatalogo(nome, preco){
    const novoCatalogo = new Catalogo(nome, preco);
    listaCatalogo.push(novoCatalogo);
    return novoCatalogo;
}

function buscarCatalogo(){
    return listaCatalogo;
}

function buscarProdutoPorNome(nome){
    const produto = listaCatalogo.find(data => data.nome === nome);
    if(produto){
        return produto;
    }else{
        return "Produto não encontrado!"
    }
}

function alterarPreco(nome, preco, novoPreco){
    const produto = listaCatalogo.find(data => data.nome === nome);
    if(produto){
        let index = listaCatalogo.findIndex(data => data.preco == preco);
        listaCatalogo[index].preco = novoPreco;
        return listaCatalogo[index];
    }else{
        return "Produto não encontrado!"
    }
}

function deletarProduto(id, nome){
    const produto = listaCatalogo.find(data => data.id === id);
    if(produto){
        let index = listaCatalogo.findIndex(data => data.nome === nome);
        listaCatalogo.splice(index, 1);
        return listaCatalogo;
    }else{
        return "Produto não encontrado!"
    }
}

export { criarCatalogo, buscarCatalogo, buscarProdutoPorNome, alterarPreco, deletarProduto }