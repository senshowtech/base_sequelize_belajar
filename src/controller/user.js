exports.addUser = async (req, res) => {
  try {
    let { name, email, password, status } = req.body;
    let create_product = await product.create({
      name: name,
      email: email,
      password: password,
      status: status,
    });
    return res.status(201).json({
      create_product,
    });
  } catch (error) {
    console.log(error);
  }
};
