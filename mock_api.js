const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/chatbot', (req, res) => {
  const userMessage = req.body.message;
  const botReply = `This is a reply from the bot to "${userMessage}"`;

  res.json({ reply: botReply });
});

app.listen(3000, () => {
  console.log('Mock API server listening on port 3000');
});
