import express from "express";
import scanUrl from "../controllers/scan.controller.js";

const router = express.Router();

router.route("/scan").post(scanUrl)


export default router;