import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { DataFlow } from '../models/_index';

// Importing clients
import {generate, embed} from '../clients/cohere/Cohere.client'
import { query } from '../clients/pinecone/Pinecone.client';
var mongoose = require('mongoose');

/**
 * @route   GET /dataFlows/test
 * @desc    Testing the dataFlows route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'DataFlow endpoint is running' });
};

/**
 * @route   GET /dataFlows/:id
 * @desc    Retrieve a dataFlow by id
 * @param   req.param.id The dataFlow id
 * @access  public
 */
exports.getDataFlowById = async (req: Request, res: Response) => {
  try {
    const dataFlow = await DataFlow.findById(req.params.id)
      .populate('Node')
      .populate('Edge')
      .exec((err, results) => {
        const dataFlow = results;
        if (!dataFlow) {
          res
            .status(statusCodes.NO_CONTENT)
            .json({ error: 'Unable to find dataFlow.' });
          return;
        }
        res.status(statusCodes.OK).json(dataFlow);
      });
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting dataFlow.', err });
  }
};
/**
 * @route   POST /dataFlows
 * @desc    Create a new dataFlow within the MongoDB
 * @param   req.body Fields required to populate the dataFlow model
 * @access  public
 */
exports.createDataFlow = async (req: Request, res: Response) => {
  const newDataFlow = new DataFlow({
    name: req.body.name,
    edges: [],
    nodes: [],
  });

  try {
    const savedDataFlow = await newDataFlow.save();
    if (!savedDataFlow || savedDataFlow !== newDataFlow) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create dataFlow.' });
    }
    res.status(statusCodes.CREATED).json(savedDataFlow);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating dataFlow.', err });
  }
};

/**
 * @route   PUT /dataFlows/:id
 * @desc    Update a dataFlow by id
 * @param   req.param.id The dataFlow id
 * @param   req.body The data to be updated for the dataFlow
 * @access  public
 */
exports.updateDataFlowById = async (req: Request, res: Response) => {
  try {
    const dataFlow = await DataFlow.findByIdAndUpdate(req.params.id, req.body);
    if (!dataFlow) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find dataFlow.' });
      return;
    }
    await dataFlow.save();
    res.status(statusCodes.OK).json(dataFlow);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating dataFlow.', err });
  }
};


const runFunctions = async (nodes) => {
  let currentData;
  for (const node of nodes) {
    if (node.type === 'generate') {
      console.log('RUNNING GEN FOR', currentData || node.data.prompt);
      currentData = await generate({ data: currentData || node.data.prompt });
    }
    if (node.type === 'embed') {
      console.log('RUNNING EMBED FOR', node);
      currentData = await embed({ data: currentData });
    }
    if (node.type === 'query') {
      console.log('RUNNING QUERY FOR', node);

      currentData = await query({ filter: currentData });
    }
  }
  return currentData;
};

/**
 * @route   PUT /dataflows/run/:id
 * @desc    Update a dataFlow by id
 * @param   req.param.id The dataFlow id
 * @param   req.body The data to be updated for the dataFlow
 * @access  public
 */
exports.runDataFlowById = async (req: Request, res: Response) => {
  try {
    const dataFlow = await DataFlow.findOne({});

    const nodes = [
      {
        name: 'Generate Node',
        position: { x: 300, y: 50 },
        type: 'generate',
        data: { prompt: 'How do i improve my sleep' },
      },
      {
        name: 'Embed Node',
        position: { x: 1000, y: 75 },
        type: 'embed',
      },
      {
        name: 'Query Node',
        position: { x: 1555, y: 87 },
        type: 'query',
        data: { topK: 10 },
      },
      {
        name: 'Generate Node',
        position: { x: 2000, y: 0 },
        type: 'generate',
      },
    ];

    const result = await runFunctions(nodes);
    console.log(result, 'is the result');

    if (!dataFlow) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find dataFlow.' });
      return;
    }

    res.status(statusCodes.OK).json(result);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating dataFlow.', err });
  }
};
/**
 * @route   DELETE /dataFlows/:id
 * @desc    Delete a dataFlow by id
 * @param   req.param.id The dataFlow id
 * @access  public
 */
exports.deleteDataFlowById = async (req: Request, res: Response) => {
  try {
    const dataFlow = await DataFlow.findByIdAndDelete(req.params.id);
    if (!dataFlow) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find dataFlow.' });
      return;
    }
    res.status(statusCodes.OK).json(dataFlow);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting dataFlow.', err });
  }
};
