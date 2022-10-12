import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { ProductController } from './controllers/index';

const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

async function main() {
  await mongoose
    .connect(url)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));
  
    const app = express();
    const port = process.env.PORT || 5000;

    app.use(express.json());
    app.use(cors());

    app.get('/products', ProductController.getAll);
    app.get('/products/:id', ProductController.getOne);
    app.get('/get-range-extremes', ProductController.getRangeExtremes);

    app.listen(port, () => {
      console.log(`Server is successfully running on port ${port}`);
    });
  }

main().catch(err => console.log(err));
