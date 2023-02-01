import { Router, Request, Response } from 'express';

// Load controller
var projectController = require('../../controllers/project.controller');

export const projectRoutes = () => {
  const router = Router();

  /**
   * @route   GET projects/test
   * @desc    Testing the projects route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    projectController.test(req, res);
  });

  /**
   * @route   POST projects
   * @desc    Create a new project within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    projectController.createProject(req, res);
  });

  /**
   * @route   GET projects/:id
   * @desc    Retrieve a project by id
   * @param   req.param.id The project id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    projectController.getProjectById(req, res);
  });

  /**
   * @route   PUT projects/:id
   * @desc    Update a project by id
   * @param   req.param.id The project id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    projectController.updateProjectById(req, res);
  });

  /**
   * @route   DELETE projects/:id
   * @desc    Delete a project by id
   * @param   req.param.id The project id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    projectController.deleteProjectById(req, res);
  });

  return router;
};
