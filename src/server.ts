import cors from 'cors';
import express from 'express';
import { resolve } from 'path';
import { AppDataSource } from './config/data-source';
import { env } from './config/enviroment-variables';
import { errorHandler } from './middlewares';
import { routes } from './routes';

// const directory = resolve(__dirname, '..', 'dist', 'uploads');
// fs.rmSync(directory, { recursive: true, force: true });
// fs.mkdirSync(directory);

const PORT = env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
  }),
);
app.use(routes);
app.use(errorHandler);
app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running in port: ${PORT}`));
  })
  .catch((error) => console.log(error));
