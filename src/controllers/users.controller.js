const usersCtrl = {};

// Models
const User = require('../models/User');

// Modules
const passport = require("passport");

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.singup = async (req, res) => {
  let errors = [];
  const { name, rut, city, address, email, phone} = req.body;
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      rut,
      city,
      address,
      email,
      phone
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    const rutUser = await User.findOne({ rut: rut });
    const type_usr = false;
    const password = rut.substring(4,8);
    if (emailUser) {
      req.flash("error_msg", "Este email ya está en uso.");
      res.redirect("/users/signup");
    }
    if (rutUser) {
        req.flash("error_msg", "Este rut ya está en uso.");
        res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, rut, type_usr, city, address, email, phone, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Ahora estás registrado.");
      res.redirect("/");
    }
  }
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });

usersCtrl.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "Cerraste sesión correctamente.");
  res.redirect("/users/signin");
};




//Cagaso
usersCtrl.searchUser = async (req, res) => {
  const {rut} = req.body;
  const rutUser = await User.findOne({ rut: rut }).lean();
  console.log(rutUser);
  res.render("users/see-user", { rutUser });
};

//editar datos de contacto
usersCtrl.renderEditForm = async (req, res) => {
  const user = await User.findById(req.params.id).lean();
  res.render("users/edit-user");
};

usersCtrl.updateUser = async (req, res) => {
  const { name, rut, city, address, email, phone } = req.body;
  await User.findByIdAndUpdate(req.params.id, { name, rut, city, address, email, phone });
  req.flash("success_msg", "Datos actualizados correctamente");
  res.redirect("/notes");
};


module.exports = usersCtrl;