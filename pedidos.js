const express = require('express');
const router = express.Router();

//Retorna todos os pedidos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna os pedidos'
    });
});

//Insere um pedido
router.post('/', (req, res, next) =>{
    const pedido = {
        id_produto: req.body.id_produto,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    })
});

//Retorna os dados de um pedido
router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos

        res.status(200).send({
            mensagem: 'Detalhes do Pedido',
            id_pedido: id
        });
});

//Exclui um pedido
router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Pedido excluído'
    });
});


module.exports = router;