const express = require("express");
const router = express.Router();

// Controller
const {
  renderVaccinesForm,
  createNewVaccines,
  renderVaccines,
} = require("../controllers/vaccines.controller");


// New Note
router.get("/vaccines/add", renderVaccinesForm);

router.post("/vaccines/new-vaccines", createNewVaccines);


router.get("/notes/see/:id", renderVaccines);


module.exports = router;