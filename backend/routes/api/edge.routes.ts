import { Router, Request, Response } from 'express';

// Load controller
var edgeController = require('../../controllers/edge.controller');

export const edgeRoutes = () => {
  const router = Router();

  /**
   * @route   GET edges/test
   * @desc    Testing the edges route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    edgeController.test(req, res);
  });

  /**
   * @route   POST edges
   * @desc    Create a new edge within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    edgeController.createEdge(req, res);
  });

  /**
   * @route   GET edges/:id
   * @desc    Retrieve a edge by id
   * @param   req.param.id The edge id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    edgeController.getEdgeById(req, res);
  });

  /**
   * @route   PUT edges/:id
   * @desc    Update a edge by id
   * @param   req.param.id The edge id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    edgeController.updateEdgeById(req, res);
  });

  /**
   * @route   DELETE edges/:id
   * @desc    Delete a edge by id
   * @param   req.param.id The edge id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    edgeController.deleteEdgeById(req, res);
  });

  return router;
};
