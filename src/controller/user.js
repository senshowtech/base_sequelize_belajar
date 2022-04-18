const { user } = require("../../models");

exports.addUser = async (req, res) => {
  try {
    let { name, email, password, status } = req.body;
    let create_user = await user.create({
      name: name,
      email: email,
      password: password,
      status: status,
    });
    return res.status(201).json({
      create_user,
    });
  } catch (error) {
    console.log(error);
  }
};
