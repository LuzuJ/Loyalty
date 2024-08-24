import { check,body} from 'express-validator';
import { validateResult } from '../Helpers/validateHelper';

export const validateCreate = [

  // Validación de las Keys
  body().custom((body) => {
    const allowedKeys = [
      'donationId', 
      'donatorId', 
      'organizationId', 
      'generalScore', 
      'notes', 
      'comments',
      'qualityCalification', 
      'timeCalification', 
      'packagingCalification', 
      'communicationCalification',
    ];

    //Keys no permitidas
    const invalidKeys = Object.keys(body).filter(key => !allowedKeys.includes(key));
    if (invalidKeys.length > 0) {
      throw new Error(`Claves no permitidas encontradas: ${invalidKeys.join(', ')}`);
    }
    return true; 
  }),

  check('donationId').isString().withMessage('donationId debe ser una cadena de texto'),
  check('donatorId').isString().withMessage('donatorId debe ser una cadena de texto'),
  check('organizationId').isString().withMessage('organizationId debe ser una cadena de texto'),
  check('generalScore').isInt({ min: 1, max: 10 }).withMessage('generalScore debe ser un número entero entre 1 y 10'),
  check('notes').optional().isString().withMessage('notes debe ser una cadena de texto'),

  body('qualityCalification.score').isInt({ min: 1, max: 5 }).withMessage('qualityCalification.score debe ser un número entero entre 1 y 5'),
  body('qualityCalification.comments').optional().isString().withMessage('qualityCalification.comments debe ser una cadena de texto'),

  body('timeCalification.score').isInt({ min: 1, max: 5 }).withMessage('timeCalification.score debe ser un número entero entre 1 y 5'),
  body('timeCalification.comments').optional().isString().withMessage('timeCalification.comments debe ser una cadena de texto'),

  body('packagingCalification.score').isInt({ min: 1, max: 5 }).withMessage('packagingCalification.score debe ser un número entero entre 1 y 5'),
  body('packagingCalification.comments').optional().isString().withMessage('packagingCalification.comments debe ser una cadena de texto'),

  body('communicationCalification.score').isInt({ min: 1, max: 5 }).withMessage('communicationCalification.score debe ser un número entero entre 1 y 5'),
  body('communicationCalification.comments').optional().isString().withMessage('communicationCalification.comments debe ser una cadena de texto'),
 
  // Middleware de validación
  validateResult,
];
