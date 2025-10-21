import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.service';
import { sendResponse } from '../../utils/sendResponse';

export const UserController = {
  getAllUsers: catchAsync(async (req: Request, res: Response) => {
    const users = await UserService.getAllUsers();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All users have been retrieved successfully.',
      data: users,
    });
  }),
  getUserById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User details retrieved successfully.',
      data: user,
    });
  }),
  deleteUserById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUserById(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User has been deleted successfully.',
      data: deletedUser,
    });
  }),
};
