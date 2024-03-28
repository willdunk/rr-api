import { Property } from "../../models/property"

export const getProperties = async () => {
    return await Property.find();
}