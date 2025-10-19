import { Response } from 'express';

interface IResponseData {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: any;
}

export const sendResponse = (res: Response, data: IResponseData) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  });
};
