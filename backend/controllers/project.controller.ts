import { Router, Request, Response } from 'express';
import { StatusCodes as statusCodes } from 'http-status-codes';
// Importing Models
import { Project } from '../models/_index';

/**
 * @route   GET /projects/test
 * @desc    Testing the projects route
 * @access  public
 */
exports.test = (req: Request, res: Response) => {
  return res.status(200).json({ res: 'Project endpoint is running' });
};

/**
 * @route   GET /projects/:id
 * @desc    Retrieve a project by id
 * @param   req.param.id The project id
 * @access  public
 */
exports.getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find project.' });
      return;
    }
    res.status(statusCodes.OK).json(project);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting project.', err });
  }
};


/**
 * @route   GET /projects/all
 * @desc    Retrieve all projects
 * @param   req.param.id The project id
 * @access  public
 */
exports.getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find({});
    if (!projects) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find project.' });
      return;
    }
    res.status(statusCodes.OK).json(projects);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while getting project.', err });
  }
};
/**
 * @route   POST /projects
 * @desc    Create a new project within the MongoDB
 * @param   req.body Fields required to populate the project model
 * @access  public
 */
exports.createProject = async (req: Request, res: Response) => {
  const newProject = new Project({
    projectName: req.body.projectName,
    dataFlowIds: [],
  });

  try {
    const savedProject = await newProject.save();
    if (!savedProject || savedProject !== newProject) {
      res
        .status(statusCodes.CONFLICT)
        .json({ error: 'Unable to create project.' });
    }
    res.status(statusCodes.CREATED).json(savedProject);
  } catch (err) {
    console.log(err, 'is the err');
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while creating project.', err });
  }
};

/**
 * @route   PUT /projects/:id
 * @desc    Update a project by id
 * @param   req.param.id The project id
 * @param   req.body The data to be updated for the project
 * @access  public
 */
exports.updateProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body);
    if (!project) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find project.' });
      return;
    }
    await project.save();
    res.status(statusCodes.OK).json(project);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while updating project.', err });
  }
};

/**
 * @route   DELETE /projects/:id
 * @desc    Delete a project by id
 * @param   req.param.id The project id
 * @access  public
 */
exports.deleteProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      res
        .status(statusCodes.NO_CONTENT)
        .json({ error: 'Unable to find project.' });
      return;
    }
    res.status(statusCodes.OK).json(project);
  } catch (err) {
    res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: 'An error occurred while deleting project.', err });
  }
};
