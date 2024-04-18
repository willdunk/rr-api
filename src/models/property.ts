import { Schema, model, Types } from 'mongoose';

const COLLECTION_NAME = 'property';

export type Property = {
    id: string,
    name: string,
    parcelIds: Types.ObjectId[]
}

const propertySchema = new Schema<Property>({
    id: {
        type: String,
        requires: true,
    },
    name: {
        type: String,
        required: true,
    },
    parcelIds: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Child' }],
        required: true,
    }
}, { timestamps: true });

export const Property = model<Property>(COLLECTION_NAME, propertySchema);