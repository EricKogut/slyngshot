// import { Router, Request, Response } from 'express';
// import { StatusCodes as statusCodes } from 'http-status-codes';
// // Importing Models
// import { MODELTYPE } from '../models/_index';

// /**
//  * @route   GET /modeltypes/test
//  * @desc    Testing the modeltypes route
//  * @access  public
//  */
// exports.test = (req: Request, res: Response) => {
//   return res.status(200).json({ res: 'MODELTYPE endpoint is running' });
// };

// /**
//  * @route   GET /modeltypes/:id
//  * @desc    Retrieve a modeltype by id
//  * @param   req.param.id The modeltype id
//  * @access  public
//  */
// exports.getMODELTYPEById = async (req: Request, res: Response) => {
//   try {
//     const modeltype = await MODELTYPE.findById(req.params.id);
//     if (!modeltype) {
//       res
//         .status(statusCodes.NO_CONTENT)
//         .json({ error: 'Unable to find modeltype.' });
//       return;
//     }
//     res.status(statusCodes.OK).json(modeltype);
//   } catch (err) {
//     res
//       .status(statusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: 'An error occurred while getting modeltype.', err });
//   }
// };
// /**
//  * @route   POST /modeltypes
//  * @desc    Create a new modeltype within the MongoDB
//  * @param   req.body Fields required to populate the modeltype model
//  * @access  public
//  */
// exports.createMODELTYPE = async (req: Request, res: Response) => {
//   const newMODELTYPE = new MODELTYPE({
//     param1: req.body.param1,
//   });

//   try {
//     const savedMODELTYPE = await newMODELTYPE.save();
//     if (!savedMODELTYPE || savedMODELTYPE !== newMODELTYPE) {
//       res
//         .status(statusCodes.CONFLICT)
//         .json({ error: 'Unable to create modeltype.' });
//     }
//     res.status(statusCodes.CREATED).json(savedMODELTYPE);
//   } catch (err) {
//     res
//       .status(statusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: 'An error occurred while creating modeltype.', err });
//   }
// };

// /**
//  * @route   PUT /modeltypes/:id
//  * @desc    Update a modeltype by id
//  * @param   req.param.id The modeltype id
//  * @param   req.body The data to be updated for the modeltype
//  * @access  public
//  */
// exports.updateMODELTYPEById = async (req: Request, res: Response) => {
//   try {
//     const modeltype = await MODELTYPE.findByIdAndUpdate(req.params.id, req.body);
//     if (!modeltype) {
//       res
//         .status(statusCodes.NO_CONTENT)
//         .json({ error: 'Unable to find modeltype.' });
//       return;
//     }
//     await modeltype.save();
//     res.status(statusCodes.OK).json(modeltype);
//   } catch (err) {
//     res
//       .status(statusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: 'An error occurred while updating modeltype.', err });
//   }
// };

// /**
//  * @route   DELETE /modeltypes/:id
//  * @desc    Delete a modeltype by id
//  * @param   req.param.id The modeltype id
//  * @access  public
//  */
// exports.deleteMODELTYPEById = async (req: Request, res: Response) => {
//   try {
//     const modeltype = await MODELTYPE.findByIdAndDelete(req.params.id);
//     if (!modeltype) {
//       res
//         .status(statusCodes.NO_CONTENT)
//         .json({ error: 'Unable to find modeltype.' });
//       return;
//     }
//     res.status(statusCodes.OK).json(modeltype);
//   } catch (err) {
//     res
//       .status(statusCodes.INTERNAL_SERVER_ERROR)
//       .json({ error: 'An error occurred while deleting modeltype.', err });
//   }
// };
