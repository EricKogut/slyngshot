import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { Node } from '../models/_index';

/**
 * @route   GET /nodes/test
 * @desc    Testing the nodes route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'Node endpoint is running' });
};

/**
 * @route   GET /nodes/:id
 * @desc    Retrieve a modeltype by id
 * @param   req.param.id The modeltype id
 * @access  public
 */
exports.getNodeById = async (req: Request, res: Response) => {
  try {
    const modeltype = await Node.findById(req.params.id);
    if (!modeltype) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find modeltype.' });
      return;
    }
    res.status(statusCodes.OK).json(modeltype);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting modeltype.', err });
  }
};
/**
 * @route   POST /nodes
 * @desc    Create a new modeltype within the MongoDB
 * @param   req.body Fields required to populate the modeltype model
 * @access  public
 */
exports.createNode = async (req: Request, res: Response) => {
  const newNode = new Node({
    name: 'new node',
    type: req.body.type,
    position: { x: 0, y: 100 },
    data: {},
  });

  try {
    const savedNode = await newNode.save();
    if (!savedNode || savedNode !== newNode) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create modeltype.' });
    }
    res.status(statusCodes.CREATED).json(savedNode);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating modeltype.', err });
  }
};

/**
 * @route   PUT /nodes/:id
 * @desc    Update a modeltype by id
 * @param   req.param.id The modeltype id
 * @param   req.body The data to be updated for the modeltype
 * @access  public
 */
exports.updateNodeById = async (req: Request, res: Response) => {
  try {
    const modeltype = await Node.findByIdAndUpdate(req.params.id, req.body);
    if (!modeltype) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find modeltype.' });
      return;
    }
    await modeltype.save();
    res.status(statusCodes.OK).json(modeltype);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating modeltype.', err });
  }
};

/**
 * @route   DELETE /nodes/:id
 * @desc    Delete a modeltype by id
 * @param   req.param.id The modeltype id
 * @access  public
 */
exports.deleteNodeById = async (req: Request, res: Response) => {
  try {
    const modeltype = await Node.findByIdAndDelete(req.params.id);
    if (!modeltype) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find modeltype.' });
      return;
    }
    res.status(statusCodes.OK).json(modeltype);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting modeltype.', err });
  }
};
