const {Router} = require('express');
const router = Router();
const _= require('underscore');

const notas = require('../notas.json');

//mostrar todo
router.get('/', (req, res) => {
    res.json(notas);
});

//agregar datos
router.post('/', (req,res) => {
    const id = notas.length + 1;
    const {titular, resumen, fotos, descripcion, fuentes,keywords} = req.body;
    const newNota = {id, ...req.body};
    if (titular && resumen && fotos && descripcion && fuentes && keywords){
        notas.push(newNota);
        res.json(notas);
    } else {
        res.status(500).json({error: 'datos incompletos'});
    }
    res.send('recibido');
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(notas, (nota, i) => {
        if(nota.id == id){
            notas.splice(i, 1);
        }
    });
    res.send(notas);
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {titular, resumen, fotos, descripcion, fuentes,keywords} = req.body;
    if (titular && resumen && fotos && descripcion && fuentes && keywords){
        _.each(notas, (nota, i) => {
            if(nota.id == id){
                nota.titular = titular;
                nota.resumen = resumen;
                nota.fotos = fotos;
                nota.descripcion = descripcion;
                nota.keywords= keywords;                
            }
        });
        res.json(notas);
    } else {
        res.status(500).json({error: ' error de datos'});
        
    }
});


module.exports = router;

