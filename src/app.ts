import { Application, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import routes from './routes/index';
const app: Application = express();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use('/api/v1', routes);

// Health checker
app.get('/', (req: Request, res: Response) => {
  res.send('Backend Running...');
});

export default app;
