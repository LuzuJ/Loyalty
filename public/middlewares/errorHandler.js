"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ message: err.message || 'Something went wrong' });
};
exports.default = errorHandler;
