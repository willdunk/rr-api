import { type Parcel as ParcelType, Parcel } from "../../models/parcel";
import { isValidPolygon } from "../../utils/validateConvexPolygon";
import { convertVertexToCoordinate } from "../../utils/convertVertexToCoordinate";
import { Property } from "../../models/property";

type RequiredAttributes = 'vertices' // Can be made a Union

type NewParcelInput = Pick<ParcelType, RequiredAttributes> & { propertyId: string };

export const createNewParcel = async (input: NewParcelInput) => {
    if (input.vertices && isValidPolygon(input.vertices.map(convertVertexToCoordinate))) {
        const vertices = input.vertices;
        const property = await Property.findOne({ _id: input.propertyId });
        if (property !== null) {
            const newParcel = await Parcel.create({ vertices });
            await Property.findOneAndUpdate(
                { _id: input.propertyId },
                { '$addToSet': { parcelIds: newParcel._id } },
                { new: true }
            );
            return newParcel
        }
        throw new Error(`Cannot find property with propertyId: ${input.propertyId}`);
    }
    throw new Error('Cannot create Parcel');
}