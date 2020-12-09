const operationsCtrl = {};

// Models
const Vaccines = require("../models/Vaccines")
const Operations = require("../models/Operations")
const Note = require("../models/Note");

operationsCtrl.renderOperationsForm = (req, res) => {
    res.render("operations/new-operations");
};

operationsCtrl.createNewOperations = async (req, res) => {
    const { name_pet, name, description, date} = req.body;
    const errors = [];
    if (!name) {
        errors.push({ text: "Porfavor ingresa el nombre de la vacuna." });
    }
    if (!description) {
        errors.push({ text: "Porfavor ingresa una descripción" });
    }
    if (!date) {
        errors.push({ text: "Porfavor ingresa la fecha" });
    }
    if (errors.length > 0) {
        res.render("vaccines/new-vaccines", {
        errors,
        name_pet,
        description,
        name, 
        date,
        });
    } else {
        const newOperations = new Operations({ name,description, date });
        const idPet = await Note.findOne({ name_pet: name_pet });
        newOperations.user = idPet._id;

        await newOperations.save();
        req.flash("success_msg", "Operación guardada correctamente");
        res.redirect("/notes");
    }
};

operationsCtrl.renderOperations = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    const operations = await Operations.find({ user: note._id })
        .sort({ date: "desc" })
        .lean();
    res.render("notes/see-notes", { operations });
};


module.exports = operationsCtrl;