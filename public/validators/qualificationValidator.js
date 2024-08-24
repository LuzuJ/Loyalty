"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreate = void 0;
const express_validator_1 = require("express-validator");
const validateHelper_1 = require("../Helpers/validateHelper");
exports.validateCreate = [
    // Validación de las Keys
    (0, express_validator_1.body)().custom((body) => {
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
    (0, express_validator_1.check)('donationId').isString().withMessage('donationId debe ser una cadena de texto'),
    (0, express_validator_1.check)('donatorId').isString().withMessage('donatorId debe ser una cadena de texto'),
    (0, express_validator_1.check)('organizationId').isString().withMessage('organizationId debe ser una cadena de texto'),
    (0, express_validator_1.check)('generalScore').isInt({ min: 1, max: 10 }).withMessage('generalScore debe ser un número entero entre 1 y 10'),
    (0, express_validator_1.check)('notes').optional().isString().withMessage('notes debe ser una cadena de texto'),
    (0, express_validator_1.body)('qualityCalification.score').isInt({ min: 1, max: 5 }).withMessage('qualityCalification.score debe ser un número entero entre 1 y 5'),
    (0, express_validator_1.body)('qualityCalification.comments').optional().isString().withMessage('qualityCalification.comments debe ser una cadena de texto'),
    (0, express_validator_1.body)('timeCalification.score').isInt({ min: 1, max: 5 }).withMessage('timeCalification.score debe ser un número entero entre 1 y 5'),
    (0, express_validator_1.body)('timeCalification.comments').optional().isString().withMessage('timeCalification.comments debe ser una cadena de texto'),
    (0, express_validator_1.body)('packagingCalification.score').isInt({ min: 1, max: 5 }).withMessage('packagingCalification.score debe ser un número entero entre 1 y 5'),
    (0, express_validator_1.body)('packagingCalification.comments').optional().isString().withMessage('packagingCalification.comments debe ser una cadena de texto'),
    (0, express_validator_1.body)('communicationCalification.score').isInt({ min: 1, max: 5 }).withMessage('communicationCalification.score debe ser un número entero entre 1 y 5'),
    (0, express_validator_1.body)('communicationCalification.comments').optional().isString().withMessage('communicationCalification.comments debe ser una cadena de texto'),
    // Middleware de validación
    validateHelper_1.validateResult,
];
