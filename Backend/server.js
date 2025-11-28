const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require('./authRoutes/authRoutes');

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://vaagaihallticket.netlify.app/'],

    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
