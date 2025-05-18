import client from "@/database";
import {Item, User} from '.'
import { DataTypes } from "sequelize";

const Order = client.define('order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});

Order.belongsTo(User, {
    foreignKey: 'user_id',
});

Order.belongsToMany(Item, {
    through: 'order_items',
});

export default Order;