const express = require('express');
const cors = require('cors');
const db = require('./db/db')
const { registerUser, loginUser} = require('./controller/authController')

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

// Ruta para obtener datos de Firestore
app.get('/api/data', async (req, res) => {
  try {
    const data = await db.collection('myCollection').get();
    const result = data.docs.map((doc) => doc.data());

    res.json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
