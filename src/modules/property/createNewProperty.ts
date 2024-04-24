import { type Property as PropertyType, Property } from "../../models/property"
import { MakeOptional } from "../../utils/ts/makeOptional";

type OptionalAttributes = "parcelIds"; // Can be made a Union
type RequiredAttributes = 'name' // Can be made a Union

type NewPropertyInput = Pick<PropertyType, RequiredAttributes> & MakeOptional<PropertyType, OptionalAttributes>;

export const createNewProperty = async (input: NewPropertyInput) => {
    // TODO: @willdunk: Add yup or zod validation here 
    const name = input.name;
    const parcelIds = input.parcelIds ?? [];
    return await Property.create({ name, parcelIds });
}