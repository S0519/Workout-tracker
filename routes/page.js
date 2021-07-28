import express from "express";
import path from 'path';

const __dirname = path.resolve();
console.log('test11111111');
console.log(__dirname);
const router = express.Router();
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
});

export default router;