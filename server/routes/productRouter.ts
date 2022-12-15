import express from 'express';
const router = express.Router();
import { ProductController } from '../controllers';
import { handleValidationErrors, checkRole } from '../middleware';
import { validation } from '../middleware';

router.get('/', ProductController.getAll);
router.get('/get-range-extremes', ProductController.getRangeExtremes);
router.get('/:id', ProductController.getOne);
router.post('/', checkRole('ADMIN'), validation.productCreate, handleValidationErrors, ProductController.create);
router.delete('/:id', checkRole('ADMIN'), ProductController.remove);
router.patch('/:id', checkRole('ADMIN'), validation.productCreate, handleValidationErrors, ProductController.update);

export default router;