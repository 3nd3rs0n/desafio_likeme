const express = require('express');
const cors = require('cors');
const app = express();

// habilitamos como middleware el CORS en todas las rutas 
app.use(cors());

const routes = require('./routes/routes');

const PORT = process.env.PORT|| 3000;

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`SERVIDOR CORRIENDO EN PUERTO ${PORT}`));


