import express from 'express';
import { PORT, DB_URL } from './config.ts';
import mongoose from 'mongoose';
import { questionRoute } from './routes/questionRoute.ts';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/questions', questionRoute);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
