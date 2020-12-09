const vaccinesCtrl = {};

// Models
const Vaccines = require("../models/Vaccines")
const Note = require("../models/Note");

vaccinesCtrl.renderVaccinesForm = (req, res) => {
    res.render("vaccines/new-vaccines");
};

vaccinesCtrl.createNewVaccines = async (req, res) => {
    const { name_pet, name, date} = req.body;
    const errors = [];
    if (!name) {
        errors.push({ text: "Porfavor ingresa el nombre de la vacuna." });
    }
    if (!date) {
        errors.push({ text: "Porfavor ingresa la fecha" });
    }
    if (errors.length > 0) {
        res.render("vaccines/new-vaccines", {
        errors,
        name_pet,
        name, 
        date,
        });
    } else {
        const newVaccines = new Vaccines({ name, date });
        const idPet = await Note.findOne({ name_pet: name_pet });
        newVaccines.user = idPet._id;

        await newVaccines.save();
        req.flash("success_msg", "Vacuna guardada correctamente");
        res.redirect("/notes");
    }
};

vaccinesCtrl.renderVaccines = async (req, res) => {
    const note = await Note.findById(req.params.id).lean();
    const vaccines = await Vaccines.find({ user: note._id })
        .sort({ date: "desc" })
        .lean();
    res.render("notes/see-notes", { vaccines });
};


module.exports = vaccinesCtrl;