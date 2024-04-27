import { Property } from "../../models/property";

export const getProperties = async () => {
    const properties = await Property.find();
    return properties.map(p => p.toObject());
}