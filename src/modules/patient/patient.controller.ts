import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { PatientService } from './patient.service';
import { sendResponse } from '../../utils/sendResponse';

export const PatientController = {
  createPatient: catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.createPatient(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Patient has been created successfully.',
      data: result,
    });
  }),

  getAllPatient: catchAsync(async (req: Request, res: Response) => {
    const result = await PatientService.getAllPatient();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All patients have been retrieved successfully.',
      data: result,
    });
  }),

  getPatientById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PatientService.getPatientById(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Patient details retrieved successfully.',
      data: result,
    });
  }),

  updatePatientById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await PatientService.updatePatientById(id, data);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Patient details have been updated successfully.',
      data: result,
    });
  }),

  deletePatientById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PatientService.deletePatientById(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Patient has been deleted successfully.',
      data: result,
    });
  }),
};
