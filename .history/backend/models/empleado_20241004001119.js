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
