const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmpleadoSchema = new Schema({
  nombre: { type: String, required: true },
  puesto: { type: String, required: true },
  departamento: { type: String, required: true },
  salario: { type: Number, required: true },
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
```

### routes/empleadoRoutes.js
```javascript
const express = require('express');
const router = express.Router();
const empleadoController = require('../controllers/empleado.controller');

// Ruta para obtener todos los empleados
router.get('/empleado', empleadoController.getEmpleados);

// Ruta para crear un nuevo empleado
router.post('/empleado', empleadoController.createEmpleado);

// Ruta para actualizar un empleado por ID
router.put('/empleado/:id', empleadoController.updateEmpleado);

// Ruta para eliminar un empleado por ID
router.delete('/empleado/:id', empleadoController.deleteEmpleado);

module.exports = router;
