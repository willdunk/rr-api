import { Schema, model, Types } from 'mongoose';

const COLLECTION_NAME = 'property';

export type Property = {
    name: string,
    parcelIds: Types.ObjectId[]
}

const propertySchema = new Schema<Property>({
    name: {
        type: String,
        required: true,
    },
    parcelIds: {
        type: [{ type: Schema.Types.String, ref: 'parcel' }],
        required: true,
    }
}, { timestamps: true });

export const Property = model<Property>(COLLECTION_NAME, propertySchema);