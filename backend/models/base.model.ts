import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface MODELTYPEDocument extends DocumentDefaults {
  param1: string;
  param2: number[];
  param3: boolean;
}

const MODELTYPESchema = new Schema(
  {
    param1: { type: Schema.Types.String, required: true, unique: true },
    param2: [{ type: Schema.Types.Number }],
    param3: Schema.Types.Boolean,
  },
  { timestamps: true }
);

const MODELTYPE: Model<MODELTYPEDocument> = model<MODELTYPEDocument>(
  'modelType',
  MODELTYPESchema
);

export { MODELTYPEDocument, MODELTYPE };
