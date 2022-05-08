import  express from 'express';
var router = express.Router();

import { FeedBackController } from '../controller';
import { Prisma } from '../repository'
import { Mailtrap } from '../service';

/* POST */
router.post('/', async function(req, res, next) {
  try {
    await FeedBackController(new Prisma(), new Mailtrap()).createNewFeedback(req.body);
    res.status(201).json();
  } catch (e) {
    console.log(e);
  }
});

export default router;

