const express = require ('express');
const app = express ();
const morgan = require ('morgan');


// configuraciones
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//meddlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas para la api
app.use(require('./routes'));
app.use("/api/notas",require('./routes/notas'));

//seccion para arrancar servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

