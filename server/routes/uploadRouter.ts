import express from 'express';
import { ProductController } from '../controllers';
import { checkAuth } from '../middleware';
import { uploadFile } from '../utils';

const router = express.Router();

router.use('/thumbnail', express.static('uploads/thumbnail'));
router.use('/images', express.static('uploads/images'));

router.post(
  '/thumbnail', 
  checkAuth, 
  uploadFile('thumbnail').single('inputFile'), 
  (req: any, res) => {
    res.json({
      url: `/api/uploads/thumbnail/${req.file.originalname}`
    });
});

router.post(
  '/images', 
  checkAuth, 
  uploadFile('images').fields([{ name: 'inputFiles', maxCount: 5 }]), 
  (req: any, res) => {
    res.json({
      files: req.files['inputFiles']
    });
});

router.delete(
  '/',
  checkAuth,
  ProductController.deleteImage
);

export default router;