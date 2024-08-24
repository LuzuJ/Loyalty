"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const qualificationRoutes_1 = __importDefault(require("./routes/qualificationRoutes"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', qualificationRoutes_1.default);
app.use(errorHandler_1.default);
exports.default = app;
