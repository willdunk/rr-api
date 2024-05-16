import { QueryResolvers, MutationResolvers } from "../generated/generatedTypes";
import { getParcels } from '../modules/parcel/getParcels';
import { createNewParcel as parcelModuleCreateNewParcel } from '../modules/parcel/createNewParcel';

export const parcels: QueryResolvers['parcels'] = (parent, { propertyId }, contextValue, info) => {
    return getParcels(propertyId);
}

export const createNewParcel: MutationResolvers['createNewParcel'] = (parent, { parcel }, contextValue, info) => {
    return parcelModuleCreateNewParcel(parcel);
}