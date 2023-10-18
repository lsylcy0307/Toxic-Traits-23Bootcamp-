// prettier-ignore
import express from 'express';
import {
  getAllPeople,
  addToxicPersonController,
  deleteToxicPerson,
} from '../controllers/toxicperson.controller';

const router = express.Router();

router.post('/', addToxicPersonController);

router.get('/all', getAllPeople);

router.delete('/:firstName', deleteToxicPerson);
