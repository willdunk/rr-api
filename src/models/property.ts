import { Schema, model } from 'mongoose';

const COLLECTION_NAME = 'property';

interface Property {
    name: string,
}

const propertySchema = new Schema<Property>({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Property = model<Property>(COLLECTION_NAME, propertySchema);