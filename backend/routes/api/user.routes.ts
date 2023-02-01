import { Router, Request, Response } from 'express';

// Load controller
var userController = require('../../controllers/user.controller');

export const userRoutes = () => {
  const router = Router();

  /**
   * @route   GET users/test
   * @desc    Testing the users route
   * @access  public
   */
  router.get('/test', (req: Request, res: Response) => {
    userController.test(req, res);
  });

  /**
   * @route   GET users/:awsId
   * @desc    Get a user by their AWS ID
   * @param   req.param.email The email of the user
   * @access  public
   */
  router.get('/search/:email', (req: Request, res: Response) => {
    userController.getUserByEmail(req, res);
  });

  /**
   * @route   GET users/:awsId
   * @desc    Get a user by their AWS ID
   * @param   req.param.email The email of the user
   * @access  public
   */
  router.get('/:email', (req: Request, res: Response) => {
    userController.getUserByEmail(req, res);
  });

  /**
   * @route   POST users
   * @desc    Create a new user within the MongoDB
   * @access  public
   */
  router.post('/', async (req: Request, res: Response) => {
    userController.createUser(req, res);
  });

  /**
   * @route   PUT confirmsignup/:email
   * @desc    User confirms their email and it updates the first_name, last_name and isConfirmed
   * @access  public
   */
  router.put('/confirmsignup/:email', async (req: Request, res: Response) => {
    userController.confirmUserSignUpByEmail(req, res);
  });

  /**
   * @route   GET users/:id
   * @desc    Retrieve a user by id
   * @param   req.param.id The user id
   * @access  public
   */
  router.get('/:id', async (req: Request, res: Response) => {
    userController.getUserById(req, res);
  });

  /**
   * @route   PUT users/:id
   * @desc    Update a user by id
   * @param   req.param.id The user id
   * @access  public
   */
  router.put('/:id', async (req: Request, res: Response) => {
    userController.updateUserById(req, res);
  });

  /**
   * @route   DELETE users/:id
   * @desc    Delete a user by id
   * @param   req.param.id The user id
   * @access  public
   */
  router.delete('/:id', async (req: Request, res: Response) => {
    userController.deleteUserById(req, res);
  });

  return router;
};
