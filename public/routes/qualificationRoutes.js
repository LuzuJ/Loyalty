"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const qualificationController_1 = require("../controllers/qualificationController");
const qualificationValidator_1 = require("../validators/qualificationValidator");
const router = (0, express_1.Router)();
//Para todas las IDs de Loyalty
router.get('/qualificationsIDs', qualificationController_1.getQualificationsIDs);
//Para toda la información o el de un ID especificado 
router.get('/qualifications/:id', qualificationController_1.getQualificationsByID);
//Get para todo
router.get('/qualificationsAll', qualificationController_1.getAllQualifications);
router.post('/qualifications', qualificationValidator_1.validateCreate, qualificationController_1.createQualifications);
//Para editar todo un ID
router.put('/qualifications/:id', qualificationValidator_1.validateCreate, qualificationController_1.updateQualifications);
router.delete('/qualifications/:id', qualificationController_1.deleteQualification);
exports.default = router;
