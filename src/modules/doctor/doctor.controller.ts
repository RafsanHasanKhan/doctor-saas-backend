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
      message: 'All doctors retrived successfully',
      data: result,
    });
  }),
  getDoctorById: catchAsync(async (req: Request, res: Response) => {
    
    const result = await DoctorService.getDoctorById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Get a doctor retrived successfully',
      data: result,
    });
  }),
  approveDoctor: catchAsync(async (req: Request, res: Response) => {
    

    const doctor = await DoctorService.approveDoctor(req.params.userId);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Doctor approved successfully',
      data: doctor,
    });
  })
};
