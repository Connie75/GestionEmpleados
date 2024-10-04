exports.editarEmpleado = async (req, res) => {
    const { id } = req.params;
  
    try {
      const empleadoEdit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
      };
      const updatedEmpleado = await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
      res.json({ status: 'Empleado Actualizado', updatedEmpleado });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Eliminar un empleado
  exports.eliminarEmpleado = async (req, res) => {
    try {
      await Empleado.findByIdAndDelete(req.params.id);
      res.json({ status: 'Empleado Eliminado' });
    } catch (error) {
      res.status(404).json({ message: 'Empleado no encontrado' });
    }
  };