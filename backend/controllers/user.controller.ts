import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { User } from '../models/_index';
import { query } from '../clients/pinecone/Pinecone.client';
import { embed } from '../clients/cohere/Cohere.client';
/**
 * @route   GET /users/test
 * @desc    Testing the users route
 * @access  public
 */
exports.test = async (req: Request, res: Response) => {
  const embedding = await embed();
  console.log(embedding);
  const result = await query({ topK: 10, filter: embedding });
  console.log(result, 'is the result');
  return res.status(200).json({ res: result + 'is the result' });
};

/**
 * @route   GET /users/search/:email
 * @desc    Get a user by their email
 * @param   req.params.email The email of the user
 * @access  public
 */
exports.getUserByEmail = async (req: Request, res: Response) => {
  User.findOne({ email: req.params.email })
    .then((user) => {
      if (!user) {
        return res.status(204).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json({ error: 'Server error. Please try again.', err });
    });
};

/**
 * @route   POST /users
 * @desc    Create a new user within the MongoDB
 * @param   req.body Fields required to populate the user model
 * @access  public
 */
exports.createUser = async (req: Request, res: Response) => {
  const newUser = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    awsId: req.body.awsId,
    picture: req.body.picture,
    origin: req.body.origin,

    isConfirmed: false,
    onboardingStep: 0,

    // TODO: Pass in website on user creation
    linkedin: null,
    website: null,
    facebook: null,
    twitter: null,

    isActive: true,
  });

  try {
    const savedUser = await newUser.save();
    if (!savedUser || savedUser !== newUser) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create user.' });
    }
    res.status(statusCodes.CREATED).json(savedUser);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating user.', err });
  }
};

/**
 * @route   PUT /confirmsignup/:email
 * @desc    User confirms their email and it updates the first_name, last_name and isConfirmed
 * @param   req.params.email The email of the user that is to be confirmed
 * @param   req.body The first name and the last name of the user
 * @access  public
 */
exports.confirmUserSignUpByEmail = async (req: Request, res: Response) => {
  User.updateOne(
    { email: req.params.email },
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      isConfirmed: true,
    }
  )
    .then((user) => {
      if (!user) {
        return res.status(204).json({ error: 'User not found' });
      }
      return res.status(200).json(user);
    })
    .catch((err) =>
      res.status(400).json({ error: 'Server error. Please try again.', err })
    );
};

/**
 * @route   GET /users/:id
 * @desc    Retrieve a user by id
 * @param   req.param.id The user id
 * @access  public
 */
exports.getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user, 'is the uesr');

    if (!user) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find user.' });
      return;
    }
    res.status(statusCodes.OK).json(user);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting user.', err });
  }
};

/**
 * @route   PUT /users/:id
 * @desc    Update a user by id
 * @param   req.param.id The user id
 * @param   req.body The data to be updated for the user
 * @access  public
 */
exports.updateUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find user.' });
      return;
    }
    await user.save();
    res.status(statusCodes.OK).json(user);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating user.', err });
  }
};

/**
 * @route   DELETE /users/:id
 * @desc    Delete a user by id
 * @param   req.param.id The user id
 * @access  public
 */
exports.deleteUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find user.' });
      return;
    }
    res.status(statusCodes.OK).json(user);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting user.', err });
  }
};
