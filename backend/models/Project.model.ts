import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface ProjectDocument extends DocumentDefaults {
  projectName: string;
  dataFlowIds: string;
}

const ProjectSchema = new Schema(
  {
    projectName: { type: Schema.Types.String, required: true },
    dataFlowIds: [{ type: Schema.Types.String, required: true }],
  },
  { timestamps: true }
);

const Project: Model<ProjectDocument> = model<ProjectDocument>(
  'project',
  ProjectSchema
);

export { ProjectDocument, Project };
