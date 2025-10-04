const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Trip = require('./models/Trip');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tripDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/add-trip', async (req, res) => {
  try {
    const newTrip = new Trip(req.body);
    await newTrip.save();
    res.send('Trip saved successfully!');
  } catch (err) {
    res.status(500).send('Error saving trip: ' + err.message);
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
