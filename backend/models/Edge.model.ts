import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface EdgeDocument extends DocumentDefaults {
  source: string;
  target: string;
}

const EdgeSchema = new Schema(
  {
    source: { type: Schema.Types.ObjectId, ref: 'Node' },
    target: { type: Schema.Types.ObjectId, ref: 'Node' },
  },
  { timestamps: true }
);

const Edge: Model<EdgeDocument> = model<EdgeDocument>('edge', EdgeSchema);

export { EdgeDocument, Edge };
