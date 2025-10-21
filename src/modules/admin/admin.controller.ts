import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AdminService } from './admin.service';
import { sendResponse } from '../../utils/sendResponse';

export const AdminController = {
  createAdmin: catchAsync(async (req: Request, res: Response) => {
    const admin = await AdminService.createAdmin(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Admin created successfully',
      data: admin,
    });
  }),
  promoteToAdmin: catchAsync(async (req: Request, res: Response) => {
    const userId = req.params.id;
    const admin = await AdminService.promoteToAdmin(userId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'User promoted to admin successfully',
      data: admin,
    });
  }),
  getAllAdmins: catchAsync(async (req: Request, res: Response) => {
    const admins = await AdminService.getAllAdmins();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Get All Admins',
      data: admins,
    });
  }),
  deleteAdmin: catchAsync(async (req: Request, res: Response) => {
    const adminId = req.params.id;
    const admin = await AdminService.deleteAdmin(adminId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Detele admin successfully',
      data: admin,
    });
  }),
};
