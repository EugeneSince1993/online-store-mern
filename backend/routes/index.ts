import express from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';
import uploadRouter from './uploadRouter';

const router = express.Router();

router.use('/products', productRouter);
router.use('/auth', userRouter);
router.use('/uploads', uploadRouter);

export default router;