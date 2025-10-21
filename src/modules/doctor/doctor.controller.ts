import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { DoctorService } from './doctor.service';
import { Request, Response } from 'express';

export const DoctorController = {
  getAllDoctors: catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.getAllDoctors();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All doctors have been retrieved successfully.',
      data: result,
    });
  }),
  getDoctorById: catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.getDoctorById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Doctor details retrieved successfully.',
      data: result,
    });
  }),
  approveDoctor: catchAsync(async (req: Request, res: Response) => {
    const doctor = await DoctorService.approveDoctor(req.params.userId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Doctor has been approved successfully.',
      data: doctor,
    });
  }),
  deleteDoctorById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await DoctorService.deleteDoctorById(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Doctor has been deleted successfully.',
      data: result,
    });
  }),
  deleteAllDoctors: catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.deleteAllDoctors();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All doctors have been deleted successfully.',
      data: result,
    });
  }),
};
