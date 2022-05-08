import express from 'express';
import cors from 'cors';
import { feedbackRouter } from './routes';

const app = express();

app.use(express.json())
app.use(cors());

app.use('/feedback', feedbackRouter);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

