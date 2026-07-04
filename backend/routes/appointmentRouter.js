import express from "express";
import { 
  cancelAppointment, 
  confirmPayment, 
  createAppointment, 
  getAppointments, 
  getAppointmentsByDoctor, 
  getAppointmentsByPatient, 
  getRegisterUserCount, 
  getStats, 
  updateAppointment 
} from "../controllers/appointmentController.js";
import { clerkMiddleware, requireAuth } from "@clerk/express"; // Ensure your Clerk middleware path is correct

const appointmentRouter = express.Router();

appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

// authentic routes
appointmentRouter.post('/', clerkMiddleware(), requireAuth(), createAppointment);
appointmentRouter.get('/me', clerkMiddleware(), requireAuth(), getAppointmentsByPatient);

appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get('/patients/count', getRegisterUserCount); // Fixed the typo from 'paitents'
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;