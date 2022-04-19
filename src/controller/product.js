const { product } = require("../../models");

exports.addProduk = async (req, res) => {
  try {
    let { nama_product, harga, qty, kurir, image, deskripsi, userId } =
      req.body;
    let create_product = await product.create({
      nama_product: nama_product,
      deskripsi: deskripsi,
      harga: harga,
      qty: qty,
      kurir: kurir,
      image: image,
      userId: userId,
    });
    return res.status(201).json({
      create_product,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const productAll = await product.findAll();
    return res.status(201).json({
      productAll,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.editProduct = async (req, res) => {
  try {
    let { nama_product, harga, qty, kurir, image, deskripsi, userId } =
      req.body;
    await product.update(
      {
        nama_product: nama_product,
        deskripsi: deskripsi,
        harga: harga,
        qty: qty,
        kurir: kurir,
        image: image,
        userId: userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(201).json({
      message: "terupdate",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await product.destroy({
      where: {
        id: id,
      },
    });
    return res.status(201).json({
      message: "terhapus",
    });
  } catch (error) {
    console.log(error);
  }
};
