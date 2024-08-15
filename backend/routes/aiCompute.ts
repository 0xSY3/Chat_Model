import { Router } from "express";
import { createAiCompute, getAiCompute } from "../controllers/aiCompute";

const router = Router();

router.post("/ai/compute", createAiCompute);
router.get("/ai/compute", getAiCompute);

export default router;
