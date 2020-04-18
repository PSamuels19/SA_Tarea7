// Se cargan los modulos necesarios
const express = require('express');
const path = require('path');

// Crea una Express app
const app = express();

// Crea un Router para acceder a las direcciones
const router = express.Router();

router.get('/', (req, res) => {
  return res.send('Hola estas acá con el COVID-19 ;)');
});

// Obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'HTML'); //path.join(__dirname, 'nombre de carpeta'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));
  
  router.get('/index',function(req,res){
    res.sendFile(path.join(__dirname+'/HTML/index.html'));
  });
  
  app.use('/', router);
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });