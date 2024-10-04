const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb+srv://condyguz:<TbFOUB3WLHULBlkR>@empleado.dm2r7.mongodb.net/
    });
    console.log('MongoDB Atlas Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
