import { Router, Request, Response } from 'express';

// Load controller
var pineconeIndexController = require('../../controllers/pineconeIndex.controller');

export const pineconeIndexRoutes = () => {
  const router = Router();

  /**
   * @route   GET pineconeIndexs/test
   * @desc    Testing the pineconeIndexs route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    pineconeIndexController.test(req, res);
  });

  /**
   * @route   POST pineconeIndexs
   * @desc    Create a new pineconeIndex within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    pineconeIndexController.createpineconeIndex(req, res);
  });

  /**
   * @route   GET pineconeIndexs/:id
   * @desc    Retrieve a pineconeIndex by id
   * @param   req.param.id The pineconeIndex id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    pineconeIndexController.getpineconeIndexById(req, res);
  });

  /**
   * @route   PUT pineconeIndexs/:id
   * @desc    Update a pineconeIndex by id
   * @param   req.param.id The pineconeIndex id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    pineconeIndexController.updatepineconeIndexById(req, res);
  });

  /**
   * @route   DELETE pineconeIndexs/:id
   * @desc    Delete a pineconeIndex by id
   * @param   req.param.id The pineconeIndex id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    pineconeIndexController.deletepineconeIndexById(req, res);
  });

  return router;
};
