const { Router } = require('express');
const router = Router();

//rutas para la api
router.get('/test', (req, res) => {
    const data = {
        "name": "erick",
        "web": "lkjdsf"
    };
    res.json({data});
});

module.exports = router;