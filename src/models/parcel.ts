import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';

const COLLECTION_NAME = 'parcel';

export type Vertex = {
    latitude: string;
    longitude: string;
}

const vertexSchema = new Schema<Vertex>({
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
})

export type Parcel = {
    _id: string,
    vertices: Vertex[],
}

const parcelSchema = new Schema<Parcel>({
    _id: {
        type: String,
        default: uuid,
    },
    vertices: {
        type: [vertexSchema],
        required: true
    }
}, { timestamps: true });

export const Parcel = model<Parcel>(COLLECTION_NAME, parcelSchema);