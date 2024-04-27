import { Schema, model, Document, PopulatedDoc } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { Parcel } from './parcel';

const COLLECTION_NAME = 'property';

export type Property = {
    _id: string
    name: string,
    parcelIds: PopulatedDoc<Parcel & Document>[]
}

const propertySchema = new Schema<Property>({
    _id: {
        type: String,
        default: uuid,
    },
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