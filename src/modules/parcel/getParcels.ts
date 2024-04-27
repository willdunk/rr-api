import { Property } from "../../models/property";

export const getParcels = async (propertyId: string) => {
    return await Property.findById(propertyId).populate('parcelIds').orFail().then((property) => {
        return property.parcelIds;
    });
}