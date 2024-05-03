import { Document, PopulatedDoc, Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Property } from './property';

const COLLECTION_NAME = 'user';

export type RefreshToken = {
    refreshTokenHash: string;
    expiresOn: Date;
}

const refreshTokenSchema = new Schema<RefreshToken>({
    refreshTokenHash: {
        type: String,
        required: true,
    },
    expiresOn: {
        type: Date,
        required: true
    }
})

export type User = {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    passwordHash: string,
    refreshTokenHashes?: RefreshToken[]
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
    refreshTokenHashes: {
        type: [refreshTokenSchema],
    },
    memberProperties: {
        type: [{ type: Schema.Types.String, ref: 'property' }],
        required: true
    }
}, { timestamps: true });

export const User = model<User>(COLLECTION_NAME, userSchema);