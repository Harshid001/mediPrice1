const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/medications', require('./routes/medications'));
app.use('/api/pharmacies', require('./routes/pharmacies'));
app.use('/api/alerts', require('./routes/alerts'));
app.use('/api/violations', require('./routes/violations'));
app.use('/api/stats', require('./routes/stats'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
