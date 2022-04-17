const { product } = require("../../models");
exports.addProduk = async (req, res) => {
  try {
    let { nama_product, harga, qty, kurir, image, deskripsi } = req.body;
    let create_product = await product.create({
      nama_product: nama_product,
      deskripsi: deskripsi,
      harga: harga,
      qty: qty,
      kurir: kurir,
      image: image,
    });
    return res.status(201).json({
      create_product,
    });
  } catch (error) {
    console.log(error);
  }
};
