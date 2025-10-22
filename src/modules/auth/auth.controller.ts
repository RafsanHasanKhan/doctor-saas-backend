import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AuthService } from './auth.service';
import { ROLES } from '../../constants/roles';
import { sendResponse } from '../../utils/sendResponse';

export const AuthController = {
  registerPatient: catchAsync(async (req: Request, res: Response) => {
    const result = await AuthService.registerPatient(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Patient acount create Successfully',
      data: result,
    });
  })
};
