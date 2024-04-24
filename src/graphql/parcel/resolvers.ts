import { createNewParcel } from "../../modules/parcel/createNewParcel";
import { getParcels } from "../../modules/parcel/getParcels";

export const resolvers = {
    Query: {
        parcels: (parent: any, args: any, contextValue: any, info: any) => getParcels(args?.propertyId),
    },
    Mutation: {
        // TODO: @willdunk This typing is why codegen is useful
        createNewParcel: (parent: any, args: any, contextValue: any, info: any) => createNewParcel(args?.parcel)
    }
};