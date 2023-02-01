import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { PineconeIndex } from '../models/_index';

/**
 * @route   GET /pineconeIndexs/test
 * @desc    Testing the pineconeIndexs route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'PineconeIndex endpoint is running' });
};

/**
 * @route   GET /pineconeIndexs/:id
 * @desc    Retrieve a pineconeIndex by id
 * @param   req.param.id The pineconeIndex id
 * @access  public
 */
exports.getPineconeIndexById = async (req: Request, res: Response) => {
  try {
    const pineconeIndex = await PineconeIndex.findById(req.params.id);
    if (!pineconeIndex) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find pineconeIndex.' });
      return;
    }
    res.status(statusCodes.OK).json(pineconeIndex);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting pineconeIndex.', err });
  }
};
/**
 * @route   POST /pineconeIndexs
 * @desc    Create a new pineconeIndex within the MongoDB
 * @param   req.body Fields required to populate the pineconeIndex model
 * @access  public
 */
exports.createPineconeIndex = async (req: Request, res: Response) => {
  const newPineconeIndex = new PineconeIndex({
    param1: req.body.param1,
  });

  try {
    const savedPineconeIndex = await newPineconeIndex.save();
    if (!savedPineconeIndex || savedPineconeIndex !== newPineconeIndex) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create pineconeIndex.' });
    }
    res.status(statusCodes.CREATED).json(savedPineconeIndex);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating pineconeIndex.', err });
  }
};

/**
 * @route   PUT /pineconeIndexs/:id
 * @desc    Update a pineconeIndex by id
 * @param   req.param.id The pineconeIndex id
 * @param   req.body The data to be updated for the pineconeIndex
 * @access  public
 */
exports.updatePineconeIndexById = async (req: Request, res: Response) => {
  try {
    const pineconeIndex = await PineconeIndex.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!pineconeIndex) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find pineconeIndex.' });
      return;
    }
    await pineconeIndex.save();
    res.status(statusCodes.OK).json(pineconeIndex);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating pineconeIndex.', err });
  }
};

/**
 * @route   DELETE /pineconeIndexs/:id
 * @desc    Delete a pineconeIndex by id
 * @param   req.param.id The pineconeIndex id
 * @access  public
 */
exports.deletePineconeIndexById = async (req: Request, res: Response) => {
  try {
    const pineconeIndex = await PineconeIndex.findByIdAndDelete(req.params.id);
    if (!pineconeIndex) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find pineconeIndex.' });
      return;
    }
    res.status(statusCodes.OK).json(pineconeIndex);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting pineconeIndex.', err });
  }
};
