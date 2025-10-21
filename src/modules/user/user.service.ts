import { UserModel } from './user.model';
import mongoose from 'mongoose';

export const UserService = {
  getAllUsers: async () => {
    const users = await UserModel.find({}, '-password');
    return users;
  },
  getUserById: async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid user ID');
    }
    const user = await UserModel.findById(id, '-password');
    if (!user) throw new Error('User not found');
    return user;
  },
  deleteUserById: async (id: string) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid user ID');
    }
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) throw new Error('User not found or already deleted');
    return deletedUser;
  },
};
