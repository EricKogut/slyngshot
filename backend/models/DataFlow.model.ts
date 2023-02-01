import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface DataFlowDocument extends DocumentDefaults {
  name: string;
  edges: String[];
  nodes: String[];
}

const DataFlowSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true, unique: true },
    edges: [{ type: Schema.Types.ObjectId, ref: 'Edge' }],
    nodes: [{ type: Schema.Types.ObjectId, ref: 'Node' }],
  },
  { timestamps: true }
);

const DataFlow: Model<DataFlowDocument> = model<DataFlowDocument>(
  'dataType',
  DataFlowSchema
);

export { DataFlowDocument, DataFlow };
