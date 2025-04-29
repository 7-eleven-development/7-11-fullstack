
import express from "express";
import { receiveTemperature, getTemperature } from "../../controllers/middleware/temperatureController.js";

const router = express.Router();

router.post("/", receiveTemperature);

router.get("/", getTemperature);

export default router;
