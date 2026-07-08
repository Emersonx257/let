const express = require('express');
const app = express();
const port = 3000;

const foodRoutes = require('./routes/foodRoutes');

app.use(express.json());
app.use('/api/foods', foodRoutes);

app.listen(port, () => {
  console.log(`Backend de comida corriendo en http://localhost:${port}`);
});
