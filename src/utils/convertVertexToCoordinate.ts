import { type Vertex } from "../models/parcel";
import { type Coordinate } from './validateConvexPolygon';

export const convertVertexToCoordinate = (vertex: Vertex): Coordinate => {
    return [parseFloat(vertex.latitude), parseFloat(vertex.longitude)];
}