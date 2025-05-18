// On Frontend, make sure to lazyload comments
import client from "@/database";
import {Item, User} from '.'
import { DataTypes } from "sequelize";

const Review = client.define("review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    text:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});

Review.belongsTo(Item, {
    foreignKey: 'item_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

export default Review;