import { NextFunction, Request, Response } from 'express';

export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ success: false, message: 'unauthorized authrized hocche na' });
    }

    console.log('req.user.role:', req.user?.role);

    const userRole = req.user.role;

    console.log(allowedRoles)
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({
        success: false,
        message: 'forbidden: you do not have permission for this action',
      });
    }
    next();
  };
};
