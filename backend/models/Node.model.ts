import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface NodeDocument extends DocumentDefaults {
  name: string;
  position: Object;
  type: string;
  data: Object;
}

const NodeSchema = new Schema(
  {
    name: { type: Schema.Types.String },
    position: [{ type: Schema.Types.Map }],
    type: { type: Schema.Types.String },
    data: { type: Schema.Types.Map },
  },
  { timestamps: true }
);

const Node: Model<NodeDocument> = model<NodeDocument>('node', NodeSchema);

export { NodeDocument, Node };
