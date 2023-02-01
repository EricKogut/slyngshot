import { Router, Request, Response } from 'express';

// Load controller
var nodeController = require('../../controllers/node.controller');

export const nodeRoutes = () => {
  const router = Router();

  /**
   * @route   GET nodes/test
   * @desc    Testing the nodes route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    nodeController.test(req, res);
  });

  /**
   * @route   POST nodes
   * @desc    Create a new node within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    nodeController.createNode(req, res);
  });

  /**
   * @route   GET nodes/:id
   * @desc    Retrieve a node by id
   * @param   req.param.id The node id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    nodeController.getNodeById(req, res);
  });

  /**
   * @route   PUT nodes/:id
   * @desc    Update a node by id
   * @param   req.param.id The node id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    nodeController.updateNodeById(req, res);
  });

  /**
   * @route   DELETE nodes/:id
   * @desc    Delete a node by id
   * @param   req.param.id The node id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    nodeController.deleteNodeById(req, res);
  });

  return router;
};
