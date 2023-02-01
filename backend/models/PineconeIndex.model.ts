import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface PineconeIndexDocument extends DocumentDefaults {
  name: string;
  dimension: number[];
  metric: string;
}

const PineconeIndexSchema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    dimension: { type: Schema.Types.Number, required: true },
    metric: Schema.Types.String,
  },
  { timestamps: true }
);

const PineconeIndex: Model<PineconeIndexDocument> =
  model<PineconeIndexDocument>('pineconeIndex', PineconeIndexSchema);

export { PineconeIndexDocument, PineconeIndex };
