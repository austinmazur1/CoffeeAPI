import express from 'express';
import connectDB from '../config/db';
import beansController from '../api/controllers/beanControllers';
import roasterController from '../api/controllers/roasterControllers';

connectDB(); //Call DB func

const app = express();

app.use(express.json());

app.use('/api', beansController);
app.use('/api', roasterController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})