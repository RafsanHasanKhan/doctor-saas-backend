import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AppointmentService } from './appointment.service';
import { sendResponse } from '../../utils/sendResponse';

export const AppointmentController = {
  createAppointment: catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.createAppointment(req.body);
    sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'Appointment has been successfully created.',
      data: result,
    });
  }),
  getAllAppointment: catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.getAllAppointments();
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'All appointments have been retrieved successfully.',
      data: result,
    });
  }),
  getAppointmentById: catchAsync(async (req: Request, res: Response) => {
    const result = await AppointmentService.getAppointmentById(req.params.id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Appointment details retrieved successfully.',
      data: result,
    });
  }),
  updateAppointment: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;
    const result = await AppointmentService.updateAppointment(id, data);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Appointment has been updated successfully.',
      data: result,
    });
  }),
  deleteAppointment: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await AppointmentService.deleteAppointment(id);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: 'Appointment has been deleted successfully.',
      data: result,
    });
  }),
};
