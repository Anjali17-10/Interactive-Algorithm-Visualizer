const express = require("express");
const router = express.Router();

const {
    markCompleted,
    getProgress
} = require("../controllers/progressController");

router.post("/complete", markCompleted);

router.get("/:email", getProgress);

module.exports = router;