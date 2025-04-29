
import express from "express";
import { receiveGasValue, getGasValue} from "../../controllers/middleware/gasSensorController.js";

const router = express.Router();

router.post("/", receiveGasValue);

router.get("/", getGasValue);

export default router;
