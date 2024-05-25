import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
const app = express();
import userRoutes from './routes/userRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

const port =process.env.PORT || 5000; 

app.use('/api/users', userRoutes); // whatever comes with /api/users goes to userRoutes  
app.get('/' , (req,res)=> res.send('Server is ready.'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server started on port : ${port}`));

