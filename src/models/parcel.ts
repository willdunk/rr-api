import { Schema, model } from 'mongoose';

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
    vertices: Vertex[],
}

const parcelSchema = new Schema<Parcel>({
    vertices: {
        type: [vertexSchema],
        required: true
    }
}, { timestamps: true });

export const Parcel = model<Parcel>(COLLECTION_NAME, parcelSchema);