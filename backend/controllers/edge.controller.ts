import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { Edge } from '../models/_index';

/**
 * @route   GET /edges/test
 * @desc    Testing the edges route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'Edge endpoint is running' });
};

/**
 * @route   GET /edges/:id
 * @desc    Retrieve a edge by id
 * @param   req.param.id The edge id
 * @access  public
 */
exports.getEdgeById = async (req: Request, res: Response) => {
  try {
    const edge = await Edge.findById(req.params.id);
    if (!edge) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find edge.' });
      return;
    }
    res.status(statusCodes.OK).json(edge);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting edge.', err });
  }
};
/**
 * @route   POST /edges
 * @desc    Create a new edge within the MongoDB
 * @param   req.body Fields required to populate the edge model
 * @access  public
 */
exports.createType = async (req: Request, res: Response) => {
  const newEdge = new Edge({
    param1: req.body.param1,
  });

  try {
    const savedEdge = await newEdge.save();
    if (!savedEdge || savedEdge !== newEdge) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create edge.' });
    }
    res.status(statusCodes.CREATED).json(savedEdge);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating edge.', err });
  }
};

/**
 * @route   PUT /edges/:id
 * @desc    Update a edge by id
 * @param   req.param.id The edge id
 * @param   req.body The data to be updated for the edge
 * @access  public
 */
exports.updateEdgeById = async (req: Request, res: Response) => {
  try {
    const edge = await Edge.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!edge) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find edge.' });
      return;
    }
    await edge.save();
    res.status(statusCodes.OK).json(edge);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating edge.', err });
  }
};

/**
 * @route   DELETE /edges/:id
 * @desc    Delete a edge by id
 * @param   req.param.id The edge id
 * @access  public
 */
exports.deleteEdgeById = async (req: Request, res: Response) => {
  try {
    const edge = await Edge.findByIdAndDelete(req.params.id);
    if (!edge) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find edge.' });
      return;
    }
    res.status(statusCodes.OK).json(edge);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting edge.', err });
  }
};
