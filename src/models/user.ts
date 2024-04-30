import { Document, PopulatedDoc, Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Property } from './property';

const COLLECTION_NAME = 'user';

export type User = {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    passwordHash: string,
    memberProperties: PopulatedDoc<Property & Document>[],
}

const userSchema = new Schema<User>({
    _id: {
        type: String,
        default: uuid,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    memberProperties: {
        type: [{ type: Schema.Types.String, ref: 'property' }],
        required: true
    }
}, { timestamps: true });

export const User = model<User>(COLLECTION_NAME, userSchema);