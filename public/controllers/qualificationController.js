"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteQualification = exports.updateQualifications = exports.createQualifications = exports.getAllQualifications = exports.getQualificationsByID = exports.getQualificationsIDs = void 0;
const qualificationService_1 = require("../services/qualificationService");
const getQualificationsIDs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const qualificationsIDs = yield (0, qualificationService_1.getQualificationsIDs)();
        res.status(200).json({
            status: 200,
            message: 'Datos de Loyalty (IDs) obtenidos correctamente',
            response: qualificationsIDs,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching qualifications' });
    }
});
exports.getQualificationsIDs = getQualificationsIDs;
const getQualificationsByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                message: 'El ID proporcionado no es válido',
            });
        }
        const qualifications = yield (0, qualificationService_1.getQualificationsByID)(id);
        if (!qualifications) {
            return res.status(404).json({
                status: 404,
                message: 'No se encontraron calificaciones con el ID proporcionado',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Calificaciones por el ID obtenidas correctamente',
            response: qualifications,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al obtener las calificaciones',
            errors: error.message || 'Error interno del servidor',
        });
    }
});
exports.getQualificationsByID = getQualificationsByID;
const getAllQualifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const qualifications = yield (0, qualificationService_1.getAllQualifications)();
        res.status(200).json({
            status: 200,
            message: 'Todas las Calificaciones obtenidas correctamente',
            response: qualifications,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching qualifications' });
    }
});
exports.getAllQualifications = getAllQualifications;
const createQualifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newQualifications = yield (0, qualificationService_1.createQualifications)(data);
        return res.status(201).json({
            status: 201,
            message: 'Calificación creada correctamente',
            response: newQualifications,
        });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating qualifications' });
    }
});
exports.createQualifications = createQualifications;
const updateQualifications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                message: 'El ID proporcionado no es válido',
            });
        }
        const updatedQualification = yield (0, qualificationService_1.updateQualifications)(id, req.body);
        if (!updatedQualification) {
            return res.status(404).json({
                status: 404,
                message: 'No se puede actualizar, dicho ID no existe',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Datos Actualizados Correctamente',
            response: updatedQualification,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error updating qualification',
            errors: error.message || 'Error interno del servidor',
        });
    }
});
exports.updateQualifications = updateQualifications;
const deleteQualification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({
                status: 400,
                message: 'El ID proporcionado no es válido',
            });
        }
        const deletedQualification = yield (0, qualificationService_1.deleteQualification)(id);
        if (!deletedQualification) {
            return res.status(404).json({
                status: 404,
                message: 'No se puede eliminar, dicho ID no existe',
            });
        }
        res.status(200).json({
            status: 200,
            message: 'Eliminación exitosa',
            response: { id },
        });
    }
    catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error al eliminar la calificación',
            errors: error.message || 'Error interno del servidor',
        });
    }
});
exports.deleteQualification = deleteQualification;
