import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import router from './routes';

dotenv.config();

const url = process.env.MONGO_URI;
let port: string | number = process.env.PORT || 5000;

const main = async () => {
  await mongoose
    .connect(url)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

  const app = express();
  
  app.use(express.json());
  app.use(cors());
  app.use('/api', router);

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server OK, port ${port}`);
  });
};

main().catch(err => console.log(err));
