import { Router } from 'express';
import { getQualificationsByID, createQualifications, updateQualifications, deleteQualification, getQualificationsIDs, getAllQualifications} from '../controllers/qualificationController';
import { validateCreate } from '../validators/qualificationValidator';
const router = Router();

//Para todas las IDs de Loyalty
router.get('/qualificationsIDs', getQualificationsIDs);

//Para toda la información o el de un ID especificado 
router.get('/qualifications/:id',getQualificationsByID);

//Get para todo
router.get('/qualificationsAll', getAllQualifications);


router.post('/qualifications',validateCreate, createQualifications);

//Para editar todo un ID
router.put('/qualifications/:id',validateCreate, updateQualifications);


router.delete('/qualifications/:id', deleteQualification);

export default router;
