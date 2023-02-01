import { Router, Request, Response } from 'express';

// Load controller
var dbtypeController = require('../../controllers/dbtype.controller');

export const dbtypeRoutes = () => {
  const router = Router();

  /**
   * @route   GET dbtypes/test
   * @desc    Testing the dbtypes route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    dbtypeController.test(req, res);
  });

  /**
   * @route   POST dbtypes
   * @desc    Create a new dbtype within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    dbtypeController.createDBtype(req, res);
  });

  /**
   * @route   GET dbtypes/:id
   * @desc    Retrieve a dbtype by id
   * @param   req.param.id The dbtype id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    dbtypeController.getDBtypeById(req, res);
  });

  /**
   * @route   PUT dbtypes/:id
   * @desc    Update a dbtype by id
   * @param   req.param.id The dbtype id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    dbtypeController.updateDBtypeById(req, res);
  });

  /**
   * @route   DELETE dbtypes/:id
   * @desc    Delete a dbtype by id
   * @param   req.param.id The dbtype id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    dbtypeController.deleteDBtypeById(req, res);
  });

  return router;
};
