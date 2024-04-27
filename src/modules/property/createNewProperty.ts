import { type Property as PropertyType, Property } from "../../models/property"
import { MakeOptionalOrNull } from "../../utils/ts/makeOptionalOrNull";

type OptionalAttributes = "parcelIds" | 'name';

type NewPropertyInput = MakeOptionalOrNull<PropertyType, OptionalAttributes>;

export const createNewProperty = async (input: NewPropertyInput) => {
    // TODO: @willdunk: Add yup or zod validation here
    const name = input.name;
    const parcelIds = input.parcelIds ?? [];
    return await Property.create({ name, parcelIds });
}