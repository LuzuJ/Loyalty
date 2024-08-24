import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateResult = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: 400,
            message: 'Error de validación',
            errors: errors.array(),
        });
    }
    next();
};
