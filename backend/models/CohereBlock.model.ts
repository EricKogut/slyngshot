import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface CohereBlockDocument extends DocumentDefaults {
  model: string;
  prompt: string;
  maxTokens: Number;
  temperature: Number;
  k: Number;
  p: Number;
  frequencyPentaly: Number;
  presencePenalty: Number;
  returnLikelihoods: Number;
}

const CohereBlockSchema = new Schema(
  {
    model: { type: Schema.Types.String },
    prompt: { type: Schema.Types.String },
    maxTokens: { type: Schema.Types.Number },
    temperature: { type: Schema.Types.Number },
    k: { type: Schema.Types.Number },
    p: { type: Schema.Types.Number },
    frequencyPentaly: { type: Schema.Types.Number },
    presencePenalty: { type: Schema.Types.Number },
    returnLikelihoods: { type: Schema.Types.Number },
  },
  { timestamps: true }
);

const CohereBlock: Model<CohereBlockDocument> = model<CohereBlockDocument>(
  'cohereBlock',
  CohereBlockSchema
);

export { CohereBlockDocument, CohereBlock };
