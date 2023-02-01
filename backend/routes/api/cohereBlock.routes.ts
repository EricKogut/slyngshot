import { Router, Request, Response } from 'express';

// Load controller
var cohereBlockController = require('../../controllers/cohereBlock.controller');

export const cohereBlockRoutes = () => {
  const router = Router();

  /**
   * @route   GET cohereBlocks/test
   * @desc    Testing the cohereBlocks route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    cohereBlockController.test(req, res);
  });

  /**
   * @route   POST cohereBlocks
   * @desc    Create a new cohereBlock within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    cohereBlockController.createDBtype(req, res);
  });

  /**
   * @route   GET cohereBlocks/:id
   * @desc    Retrieve a cohereBlock by id
   * @param   req.param.id The cohereBlock id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    cohereBlockController.getDBtypeById(req, res);
  });

  /**
   * @route   PUT cohereBlocks/:id
   * @desc    Update a cohereBlock by id
   * @param   req.param.id The cohereBlock id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    cohereBlockController.updateDBtypeById(req, res);
  });

  /**
   * @route   DELETE cohereBlocks/:id
   * @desc    Delete a cohereBlock by id
   * @param   req.param.id The cohereBlock id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    cohereBlockController.deleteDBtypeById(req, res);
  });

  return router;
};
