import { Property } from "../../models/property";

export const getParcels = async (propertyId: string) => {
    const property = await Property.findById(propertyId).populate('parcelIds');
    if (property !== null) {
        return property.parcelIds;
    };
    throw new Error(`Cannot find Property with propertyId: ${propertyId}`);
}