const { Cart } = require("../models");

exports.getCarts = async (req, res) => {
  try {
    const carts = await Cart.findAll({ where: { userId: req.user.id } });
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ userId: req.user.id, status: "oncart" });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateCartStatus = async (req, res) => {
  try {
    const cart = await Cart.findByPk(req.params.id);
    if (!cart) return res.status(404).json({ message: "Cart not found" });

    await cart.update({ status: req.body.status });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
