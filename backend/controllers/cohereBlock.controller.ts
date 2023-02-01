import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { CohereBlock } from '../models/_index';

/**
 * @route   GET /cohereBlocks/test
 * @desc    Testing the cohereBlocks route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'CohereBlock endpoint is running' });
};

/**
 * @route   GET /cohereBlocks/:id
 * @desc    Retrieve a cohereBlock by id
 * @param   req.param.id The cohereBlock id
 * @access  public
 */
exports.getCohereBlockById = async (req: Request, res: Response) => {
  try {
    const cohereBlock = await CohereBlock.findById(req.params.id);
    if (!cohereBlock) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find cohereBlock.' });
      return;
    }
    res.status(statusCodes.OK).json(cohereBlock);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting cohereBlock.', err });
  }
};
/**
 * @route   POST /cohereBlocks
 * @desc    Create a new cohereBlock within the MongoDB
 * @param   req.body Fields required to populate the cohereBlock model
 * @access  public
 */
exports.createCohereBlock = async (req: Request, res: Response) => {
  const newCohereBlock = new CohereBlock({
    param1: req.body.param1,
  });

  try {
    const savedCohereBlock = await newCohereBlock.save();
    if (!savedCohereBlock || savedCohereBlock !== newCohereBlock) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create cohereBlock.' });
    }
    res.status(statusCodes.CREATED).json(savedCohereBlock);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating cohereBlock.', err });
  }
};

/**
 * @route   PUT /cohereBlocks/:id
 * @desc    Update a cohereBlock by id
 * @param   req.param.id The cohereBlock id
 * @param   req.body The data to be updated for the cohereBlock
 * @access  public
 */
exports.updateCohereBlockById = async (req: Request, res: Response) => {
  try {
    const cohereBlock = await CohereBlock.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!cohereBlock) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find cohereBlock.' });
      return;
    }
    await cohereBlock.save();
    res.status(statusCodes.OK).json(cohereBlock);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating cohereBlock.', err });
  }
};

/**
 * @route   DELETE /cohereBlocks/:id
 * @desc    Delete a cohereBlock by id
 * @param   req.param.id The cohereBlock id
 * @access  public
 */
exports.deleteCohereBlockById = async (req: Request, res: Response) => {
  try {
    const cohereBlock = await CohereBlock.findByIdAndDelete(req.params.id);
    if (!cohereBlock) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find cohereBlock.' });
      return;
    }
    res.status(statusCodes.OK).json(cohereBlock);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting cohereBlock.', err });
  }
};
