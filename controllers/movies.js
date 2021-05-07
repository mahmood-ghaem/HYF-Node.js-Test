import { v4 as uuidv4 } from 'uuid';

let movies = [
  {
    id: 'cdccfb04-4d60-4b77-8a7e-ae915c44a2f7',
    title: 'Inception',
    director: 'Christopher Nolan',
    release_date: '2010-07-16',
  },
  {
    id: 'cdccfb04-4d60-4b77-8a7e-ae915c44a2f8',
    title: 'The Irishman',
    director: 'Martin Scorsese',
    release_date: '2019-09-27',
  },
];

const findMovie = (id) => {
  const movie = movies.find((movie) => movie.id === id);
  if (movie != null) {
    return movie;
  } else {
    return false;
  }
};

export const getMovies = (req, res) => {
  if (movies.length != 0) {
    res.status(200);
    res.send(movies);
  } else {
    res.status(404);
    res.send('There is not any movie in the database.');
  }
};

export const createMovie = (req, res) => {
  const movie = req.body;
  movies.push({ id: uuidv4(), ...movie });
  res.status(201);
  res.send(`movie with the title ${movie.title} added to the database.`);
};

export const getMovie = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (movie) {
    res.status(200);
    res.send(movie);
  } else {
    res.status(400);
    res.send(`The movie with id ${id} does not exist in the database.`);
  }
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  if (findMovie(id)) {
    movies = movies.filter((movie) => movie.id !== id);
    res.status(200);
    res.send(`movie with the id ${id} deleted from the database.`);
  } else {
    res.status(400);
    res.send(`The movie with id ${id} does not exist in the database.`);
  }
};

export const updateMovie = (req, res) => {
  const { id } = req.params;
  const movie = findMovie(id);
  if (movie) {
    const { title, director, release_date } = req.body;
    if (title) movie.title = title;
    if (director) movie.director = director;
    if (release_date) movie.release_date = release_date;
    res.status(200);
    res.send(`The movie with id ${id} has been updated.`);
  } else {
    res.status(400);
    res.send(`The movie with id ${id} does not exist in the database.`);
  }
};
