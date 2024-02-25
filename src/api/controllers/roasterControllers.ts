import { Router, Request, Response } from 'express';
import Roasters from '../models/Roasters';


const router = Router();

router.get('/roasters', async (req: Request, res: Response) => {
  try {
    const beans = await Roasters.find();
    // res.json(beans);
    res.status(200).send('Roasters!!')
  } catch (error) {
    console.error('Error fetching beans:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/roaster', async(req: Request,res: Response) => {
try {
    console.log('req!', req.body)
    res.status(200).send(req.body)
    Roasters.create(req.body)
} catch (error) {
    console.log('Error adding Roaster!')
}
})

export default router;
