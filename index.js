import express from 'express';

import moviesRoutes from './routes/movies.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/movies', moviesRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Homepage.');
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server Running on port: http://localhost:${PORT}`),
);
