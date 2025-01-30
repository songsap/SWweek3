const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ success: true, data: { id: 1 } });
});

const hospitals = require('./routes/hospitals');
app.use('/api/v1/hospitals',hospitals);
// Define a port (default to 5000 if not in .env)
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
