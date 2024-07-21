module.exports = (sequelize, DataTypes) => {
  const CartHistory = sequelize.define("CartHistory", {
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  CartHistory.associate = (models) => {
    CartHistory.belongsTo(models.Cart, { foreignKey: "cartId" });
    CartHistory.belongsTo(models.Product, { foreignKey: "productId" });
  };

  return CartHistory;
};
