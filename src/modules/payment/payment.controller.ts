import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { PaymentService } from './payment.service';

export const PaymentController = {
  createPayment: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.createPayment(req.body);
    res.status(201).json({
      success: true,
      message: 'Payment created successfully',
      data: result,
    });
  }),

  getAllPayments: catchAsync(async (req: Request, res: Response) => {
    const result = await PaymentService.getAllPayments();
    res.status(200).json({
      success: true,
      message: 'Payments retrieved successfully',
      data: result,
    });
  }),

  getPaymentById: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.getPaymentById(id);
    res.status(200).json({
      success: true,
      message: 'Payment retrieved successfully',
      data: result,
    });
  }),

  updatePayment: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.updatePayment(id, req.body);
    res.status(200).json({
      success: true,
      message: 'Payment updated successfully',
      data: result,
    });
  }),

  deletePayment: catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await PaymentService.deletePayment(id);
    res.status(200).json({
      success: true,
      message: 'Payment deleted successfully',
      data: result,
    });
  }),
};
