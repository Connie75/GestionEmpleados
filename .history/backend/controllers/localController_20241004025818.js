const getLocals = (req, res) => {
  // Lógica para obtener todos los locales
  res.send('Obtener todos los locales');
};

const createLocal = (req, res) => {
  // Lógica para crear un nuevo local
  res.send('Crear un nuevo local');
};

const updateLocal = (req, res) => {
  // Lógica para actualizar un local por ID
  res.send(`Actualizar local con ID ${req.params.id}`);
};

const deleteLocal = (req, res) => {
  // Lógica para eliminar un local por ID
  res.send(`Eliminar local con ID ${req.params.id}`);
};

module.exports = {
  getLocals,
  createLocal,
  updateLocal,
  deleteLocal
};
