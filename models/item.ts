import client from "@/database";
import { DataTypes } from "sequelize";
import {Order, Review} from '.'

const Item = client.define('item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sku:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // Store in pennies to avoid floating point issues with addition for order totals.
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    inventory:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
})

Item.hasMany(Review, {
    foreignKey: 'item_id',
});

Item.belongsToMany(Order, {
    through: 'order_items',
});

export default Item;