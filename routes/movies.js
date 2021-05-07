import express from 'express';
import {
  createMovie,
  getMovies,
  getMovie,
  deleteMovie,
  updateMovie,
} from '../controllers/movies.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', createMovie);

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

router.patch('/:id', updateMovie);

export default router;
