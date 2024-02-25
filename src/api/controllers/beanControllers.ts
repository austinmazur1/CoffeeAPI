import { Router, Request, Response } from 'express';
import Beans from '../models/Beans'; 


const router = Router();

router.get('/beans', async (req: Request, res: Response) => {
  try {
    const beans = await Beans.find();
    // res.json(beans);
    res.status(200).send('BEANS!!')
  } catch (error) {
    console.error('Error fetching beans:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/bean', async (req:Request, res: Response) => {
    try {
        res.status(200).send(req.body)
        Beans.create(req.body)
    } catch (error) {
        console.log('Error creating bean')
    }
})

export default router;
