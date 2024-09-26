const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message); // Debugging için

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message }
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("OpenAI Response:", response.data); // Debugging için

    res.json({ text: response.data.choices[0].message.content });
  } catch (error) {
    if (error.response) {
      console.error('Error response:', error.response.data); // Daha detaylı hata mesajı
    } else {
      console.error('Error message:', error.message); // Genel hata mesajı
    }
    res.status(500).json({ error: 'An error occurred while communicating with ChatGPT.' });
  }
});

module.exports = router;
