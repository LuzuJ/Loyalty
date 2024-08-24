import express from 'express';
import qualificationRoutes from './routes/qualificationRoutes';
import errorHandler from './middlewares/errorHandler'; 
const app = express();

app.use(express.json());
app.use('/api', qualificationRoutes);
app.use(errorHandler);

export default app;
