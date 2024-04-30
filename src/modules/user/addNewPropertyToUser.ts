import { User } from "../../models/user";

export const addNewPropertyToUser = async (userId: string, propertyId: string) => {
    return await User.findOneAndUpdate(
        { _id: userId },
        { '$addToSet': { memberProperties: propertyId } },
        { new: true }
    ).populate('memberProperties');
}