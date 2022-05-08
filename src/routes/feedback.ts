import  express from 'express';
var router = express.Router();

/* POST */
router.post('/', async function(req, res, next) {
  
  
  res.status(200).json();
});

export default router;

