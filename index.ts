import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import fs from 'fs';
import multer from 'multer';
import cors from 'cors';
import mongoose from 'mongoose';
const path = require('path');
import { ProductController, UserController } from './controllers/index';
import { loginValidation, productCreateValidation, registerValidation } from './validations';
import { checkAuth, handleValidationErrors } from './utils';

const url = process.env.MONGO_URI;
let port: string | number = process.env.PORT || 5000;

async function main() {
  await mongoose
    .connect(url)
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));
  
    const app = express();

    const storage = multer.diskStorage({
      destination: (_, __, cb) => {
        if (!fs.existsSync('uploads')) {
          fs.mkdirSync('uploads');
        }
        cb(null, 'uploads');
      },
      filename: (_, file, cb) => {
        cb(null, file.originalname);
      },
    });

    const upload = multer({ storage });
    
    app.use(express.json());
    app.use(cors());
    app.use('/uploads', express.static('uploads'));

    app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
    app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
    app.get('/auth/me', checkAuth, UserController.getMe);

    app.post('/upload', checkAuth, upload.single('image'), (req: any, res) => {
      res.json({
        url: `/uploads/${req.file.originalname}`,
      });
    });

    app.get('/products', ProductController.getAll);
    app.get('/products/:id', ProductController.getOne);
    app.post('/products', checkAuth, productCreateValidation, handleValidationErrors, ProductController.create);
    app.delete('/products/:id', checkAuth, ProductController.remove);
    app.patch('/products/:id', checkAuth, productCreateValidation, handleValidationErrors, ProductController.update);

    app.get('/get-range-extremes', ProductController.getRangeExtremes);

    if (process.env.NODE_ENV === 'production') {
      app.use(express.static('client/build'));
    
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    }

    app.listen(port, () => {
      console.log(`Server is successfully running on port ${port}`);
    });
  }

main().catch(err => console.log(err));
