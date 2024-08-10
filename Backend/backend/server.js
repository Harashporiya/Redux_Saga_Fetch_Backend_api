const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/User');
require('dotenv').config();
const cors = require("cors")
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Use Routes
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
