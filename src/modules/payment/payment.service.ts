import { PaymentModel } from './payment.model';
import { IPayment } from './payment.interface';

export const PaymentService = {
  createPayment: async (payload: IPayment) => {
    return await PaymentModel.create(payload);
  },

  getAllPayments: async () => {
    return await PaymentModel.find()
      .populate('userId', 'name email')
      .populate('doctorId', 'name specialization');
  },

  getPaymentById: async (id: string) => {
    return await PaymentModel.findById(id)
      .populate('userId', 'name email')
      .populate('doctorId', 'name specialization');
  },

  updatePayment: async (id: string, payload: Partial<IPayment>) => {
    return await PaymentModel.findByIdAndUpdate(id, payload, { new: true });
  },

  deletePayment: async (id: string) => {
    const payment = await PaymentModel.findById(id);
    if (!payment) {
      throw new Error ('Payment not found')
    }
    if (payment.status === 'paid') {
      throw new Error('You cannot delete a paid payment');
    }
    return await PaymentModel.findByIdAndDelete(id)
  },
};
