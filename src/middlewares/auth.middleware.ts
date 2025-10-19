import { NextFunction, Request, Response } from 'express';
import config from '../config';
import jwt from 'jsonwebtoken';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    const decoded = jwt.verify(token, config.jwt.secret as string) as {
      id: string;
      email: string;
      role: string;
    };

    req.user = decoded; // 🔥 store user info in request
    next();
  } catch (err) {
    res
      .status(401)
      .json({ success: false, message: 'Invalid or expired token' });
  }
};
