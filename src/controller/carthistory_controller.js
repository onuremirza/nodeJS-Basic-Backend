const { CartHistory, Cart, Product } = require("../models");

exports.getCartHistories = async (req, res) => {
  try {
    const cartHistories = await CartHistory.findAll();
    res.json(cartHistories);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createCartHistory = async (req, res) => {
  try {
    const { cartId, productId, quantity } = req.body;
    const cart = await Cart.findByPk(cartId);
    const product = await Product.findByPk(productId);

    if (!cart) return res.status(404).json({ message: "Cart not found" });
    if (!product) return res.status(404).json({ message: "Product not found" });

    const cartHistory = await CartHistory.create({
      cartId,
      productId,
      quantity,
    });
    res.json(cartHistory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateCartHistory = async (req, res) => {
  try {
    const cartHistory = await CartHistory.findByPk(req.params.id);
    if (!cartHistory)
      return res.status(404).json({ message: "CartHistory not found" });

    await cartHistory.update(req.body);
    res.json(cartHistory);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteCartHistory = async (req, res) => {
  try {
    const cartHistory = await CartHistory.findByPk(req.params.id);
    if (!cartHistory)
      return res.status(404).json({ message: "CartHistory not found" });

    await cartHistory.destroy();
    res.json({ message: "CartHistory deleted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
