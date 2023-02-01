import { Schema, Model, model } from 'mongoose';

import { DocumentDefaults } from '../types/_index';

interface UserDocument extends DocumentDefaults {
  awsId: string;
  first_name: string;
  last_name: string;
  email: string;
  bio: string;
  avatarURL: string;
  origin: string;
  linkedin: string;
  website: string;
  facebook: string;
  twitter: string;
  isActive: boolean;
  onboardingStep: number;
}

const UserSchema = new Schema(
  {
    awsId: { type: Schema.Types.String, required: true, unique: true },
    first_name: { type: Schema.Types.String, required: true, unique: true },
    last_name: { type: Schema.Types.String, required: true, unique: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    bio: Schema.Types.String,
    avatarURL: Schema.Types.String,
    origin: Schema.Types.String, //i.e. Google, Facebook, or social sign in

    linkedin: Schema.Types.String,
    website: Schema.Types.String,
    facebook: Schema.Types.String,
    twitter: Schema.Types.String,

    isActive: Schema.Types.Boolean,
    onboardingStep: Schema.Types.Number
  },
  { timestamps: true }
);

const User: Model<UserDocument> = model<UserDocument>('user', UserSchema);

export { UserDocument, User };
