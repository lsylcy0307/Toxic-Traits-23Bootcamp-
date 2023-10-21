// prettier-ignore
import express from 'express';
import {
  getAllPeople,
  addToxicPersonController,
  deleteToxicPerson,
  getUserController,
} from '../controllers/toxicperson.controller';

const router = express.Router();

router.post('/register', addToxicPersonController);

router.get('/:id', getUserController);
router.get('/', getAllPeople);

router.delete('/:id', deleteToxicPerson);

export default router;
