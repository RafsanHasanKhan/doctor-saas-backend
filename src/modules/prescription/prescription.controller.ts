import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { PrescriptionService } from './prescription.service';

export const PrescriptionController = {
  createPrescription: catchAsync(async (req: Request, res: Response) => {
    const result = await PrescriptionService.createPrescription(req.body);
    res.status(201).json({
      success: true,
      message: 'Prescription created successfully',
      data: result,
    });
  }),

  getAllPrescriptions: catchAsync(async (req: Request, res: Response) => {
    const result = await PrescriptionService.getAllPrescriptions();
    res.status(200).json({
      success: true,
      message: 'Prescriptions retrieved successfully',
      data: result,
    });
  }),

  getPrescriptionById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PrescriptionService.getPrescriptionById(id);
    res.status(200).json({
      success: true,
      message: 'Prescription retrieved successfully',
      data: result,
    });
  }),

  updatePrescription: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PrescriptionService.updatePrescription(id, req.body);
    res.status(200).json({
      success: true,
      message: 'Prescription updated successfully',
      data: result,
    });
  }),

  deletePrescription: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PrescriptionService.deletePrescription(id);
    res.status(200).json({
      success: true,
      message: 'Prescription deleted successfully',
      data: result,
    });
  }),
};
