import express from 'express';
import userRoutes from './routes/user.routes';
import workerRoutes from './routes/worker.routes'

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', workerRoutes);

export default app;