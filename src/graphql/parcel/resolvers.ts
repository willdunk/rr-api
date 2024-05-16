import { Resolvers } from "../../generated/generatedTypes";
import { parcels, createNewParcel } from '../../handlers/parcel';

export const resolvers: Resolvers = {
    Query: {
        parcels,
    },
    Mutation: {
        createNewParcel
    }
};