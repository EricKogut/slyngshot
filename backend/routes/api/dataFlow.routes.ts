import { Router, Request, Response } from 'express';

// Load controller
var dataFlowController = require('../../controllers/dataFlow.controller');

export const dataFlowRoutes = () => {
  const router = Router();

  /**
   * @route   GET dataFlows/test
   * @desc    Testing the dataFlows route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    dataFlowController.test(req, res);
  });

  /**
   * @route   POST dataFlows
   * @desc    Create a new dataFlow within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    dataFlowController.createDataFlow(req, res);
  });

  /**
   * @route   GET dataFlows/:id
   * @desc    Retrieve a dataFlow by id
   * @param   req.param.id The dataFlow id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    dataFlowController.getDataFlowById(req, res);
  });

  /**
   * @route   PUT dataFlows/:id
   * @desc    Update a dataFlow by id
   * @param   req.param.id The dataFlow id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    dataFlowController.updateDataFlowById(req, res);
  });

  /**
   * @route   PUT dataFlows/run/:id
   * @desc    Run a dataFlow by id
   * @param   req.param.id The dataFlow id
   * @access  public
   */
  router.get('/run/:id', async (req: Request, res: Response) => {
    dataFlowController.runDataFlowById(req, res);
  });

  /**
   * @route   DELETE dataFlows/:id
   * @desc    Delete a dataFlow by id
   * @param   req.param.id The dataFlow id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    dataFlowController.deleteDataFlowById(req, res);
  });

  return router;
};
