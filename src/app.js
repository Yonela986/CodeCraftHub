const express = require('express');
const connectDB = require('./config/db');
const initServer = require('./config/server');
const userRouters = require('./routes/userRouters');
const errorHandler = require('./utils/errorHandler');

const app = initServer();

// Connect to MongoDB directly
connectDB();

app.use('/api/users', userRouters);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

