import { MutationCreateNewParcelArgs, QueryParcelsArgs, Resolvers } from "../../generated/generatedTypes";
import { createNewParcel } from "../../modules/parcel/createNewParcel";
import { getParcels } from "../../modules/parcel/getParcels";

export const resolvers: Resolvers = {
    Query: {
        parcels: (parent, args: QueryParcelsArgs, contextValue, info) => getParcels(args.propertyId),
    },
    Mutation: {
        createNewParcel: (parent, args: MutationCreateNewParcelArgs, contextValue, info) => createNewParcel(args.parcel)
    }
};