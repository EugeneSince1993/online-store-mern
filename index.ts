import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import fs from 'fs-extra';
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

    const uploadFunc = (dest: string) => {
      const storage = multer.diskStorage({
        destination: (req, file, callback) => {
          const path = `./uploads/${dest}`;
          if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
          }
          callback(null, path);
        },
        filename: (req, file, callback) => {
          callback(null, file.originalname);
        },
      });

      const upload = multer({ storage });
      return upload;
    };
    
    app.use(express.json());
    app.use(cors());
    app.use('/uploads/thumbnail', express.static('uploads/thumbnail'));
    app.use('/uploads/images', express.static('uploads/images'));

    app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
    app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register);
    app.get('/auth/me', checkAuth, UserController.getMe);

    app.post(
      '/uploads/thumbnail', 
      checkAuth, 
      uploadFunc('thumbnail').single('inputFile'), 
      (req: any, res) => {
        res.json({
          url: `/uploads/thumbnail/${req.file.originalname}`
        });
    });
    app.post(
      '/uploads/images', 
      checkAuth, 
      uploadFunc('images').fields([{ name: 'inputFiles', maxCount: 5 }]), 
      (req: any, res) => {
        res.json({
          files: req.files['inputFiles']
        });
    });
    app.delete(
      '/uploads',
      checkAuth,
      ProductController.deleteImage
    );

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
