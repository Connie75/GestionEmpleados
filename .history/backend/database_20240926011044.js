const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || 'MONGO_URI=mongodb+srv://condyguz:<TbFOUB3WLHULBlkR>@empleado.dm2r7.mongodb.net/'

mongoose.connect(MONGO_URI)
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch((err) => console.log('Error al conectar a MongoDB:', err));
