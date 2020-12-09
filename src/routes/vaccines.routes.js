const express = require("express");
const router = express.Router();

// Controller
const {
  renderVaccinesForm,
  createNewVaccines,
  renderVaccines,
} = require("../controllers/vaccines.controller");

// See Notes
router.get("/notes/see/:id", renderVaccines);
// New Note
router.get("/vaccines/add", renderVaccinesForm);

router.post("/vaccines/new-vaccines", createNewVaccines);



module.exports = router;