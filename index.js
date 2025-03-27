// Index.js
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/config');
const TaskRoutes = require('./routes/tasks');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/tasks', TaskRoutes);

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Conectar a MongoDB
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
