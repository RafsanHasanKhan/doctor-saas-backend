import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AuthService } from './auth.service';
import { ROLES } from '../../constants/roles';
import { sendResponse } from '../../utils/sendResponse';

export const AuthController = {
  registerDoctor: catchAsync(async (req: Request, res: Response) => {
    const doctor = await AuthService.registerDoctor({
      ...req.body,
      role: ROLES.DOCTOR,
      isActive: false,
    });
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'Doctor has been registered successfully.',
      data: doctor,
    });
  }),

  registerUser: catchAsync(async (req: Request, res: Response) => {
    const user = await AuthService.registerUser({
      ...req.body,
      role: ROLES.USER,
      isActive: true,
    });
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: 'User has been registered successfully.',
      data: user,
    });
  }),

  login: catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Login successful.',
      data: result,
    });
  }),
};
