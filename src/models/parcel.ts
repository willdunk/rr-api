import { Schema, model } from 'mongoose';

const COLLECTION_NAME = 'parcel';

type Vertex = {
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

type Parcel = {
    id: string,
    vertices: Vertex[],
}

const parcelSchema = new Schema<Parcel>({
    id: {
        type: String,
        required: true,
    },
    vertices: {
        type: [vertexSchema],
        required: true
    }
}, { timestamps: true });

export const Parcel = model<Parcel>(COLLECTION_NAME, parcelSchema);