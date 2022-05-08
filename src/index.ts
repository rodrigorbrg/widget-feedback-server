import express from 'express';
import cors from 'cors';
import feedbackRouter from './routes/feedback';

const app = express();

app.use(express.json())
app.use(cors());

app.use('/feedback', feedbackRouter);

app.listen('3333', () => {
  console.log('Server running on port 3333')
})

