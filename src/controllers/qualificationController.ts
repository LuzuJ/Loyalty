import { Request, Response } from 'express';
import {
  getAllQualifications as fetchAllQualifications,
  createQualifications as addNewQualifications,
  updateQualifications as modifyQualifications,
  deleteQualification as removeQualification,
  getQualificationsIDs as fetchAllQualificationsIDs,
  getQualificationsByID as fetchAllQualificationsByID,
} from '../services/qualificationService';

export const getQualificationsIDs = async (req: Request, res: Response) => {
  try {
    const qualificationsIDs = await fetchAllQualificationsIDs();
    res.status(200).json({
      status: 200,
      message: 'Datos de Loyalty (IDs) obtenidos correctamente',
      response: qualificationsIDs,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching qualifications' });
  }
};

export const getQualificationsByID = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10); 
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: 'El ID proporcionado no es válido',
      });
    }

    const qualifications = await fetchAllQualificationsByID(id);
    
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
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: 'Error al obtener las calificaciones',
      errors: error.message || 'Error interno del servidor',
    });
  }
};

export const getAllQualifications = async (req: Request, res: Response) => {
  try {
    const qualifications = await fetchAllQualifications();
    res.status(200).json({
      status: 200,
      message: 'Todas las Calificaciones obtenidas correctamente',
      response: qualifications,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching qualifications' });
  }
};

export const createQualifications = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const newQualifications = await addNewQualifications(data);
    return res.status(201).json({
      status: 201,
      message: 'Calificación creada correctamente',
      response: newQualifications,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating qualifications' });
  }
};

export const updateQualifications = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: 'El ID proporcionado no es válido',
      });
    }

    const updatedQualification = await modifyQualifications(id, req.body);

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
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: 'Error updating qualification',
      errors: error.message || 'Error interno del servidor',
    });
  }
};

export const deleteQualification = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({
        status: 400,
        message: 'El ID proporcionado no es válido',
      });
    }

    const deletedQualification = await removeQualification(id);
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
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: 'Error al eliminar la calificación',
      errors: error.message || 'Error interno del servidor',
    });
  }
};
