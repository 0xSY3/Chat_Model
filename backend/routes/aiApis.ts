import { Router } from "express";
import { createAiApis, getAllAIApis } from "../controllers/aiApis";

const router = Router();

router.post("/ai/api", createAiApis);
router.get("/ai/api", getAllAIApis);

export default router;
