import express from 'express';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import { 
  cancelServiceAppointment, 
  confirmServicePayment, 
  createServiceAppointment, 
  getServiceAppointments, 
  getServiceAppointmentById, 
  updateServiceAppointment, 
  getServiceAppointmentStats, 
  getAppointmentForPatient 
} from '../controllers/serviceAppointmentController.js'; // Double-check this path matches your project structure

const serviceAppointmentRouter = express.Router();

serviceAppointmentRouter.get("/", getServiceAppointments);
serviceAppointmentRouter.get("/confirm", confirmServicePayment);
serviceAppointmentRouter.get("/stats/summary", getServiceAppointmentStats);

serviceAppointmentRouter.post("/", clerkMiddleware(), requireAuth(), createServiceAppointment);

// Uses your exact controller function: getAppointmentForPatient
serviceAppointmentRouter.get("/me", clerkMiddleware(), requireAuth(), getAppointmentForPatient);

serviceAppointmentRouter.get("/:id", getServiceAppointmentById);
serviceAppointmentRouter.put("/:id", updateServiceAppointment);
serviceAppointmentRouter.post("/:id/cancel", cancelServiceAppointment);

export default serviceAppointmentRouter;