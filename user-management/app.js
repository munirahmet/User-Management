const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const chatRoutes = require('./routes/chatRoutes'); // Chat routes'u ekleyin

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use('/api/chat', chatRoutes); // Chat routes'u kullanın

sequelize.sync()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });
