import client from "@/database";
import { DataTypes } from "sequelize";
import {Order, Review} from ".";

const User = client.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});

User.hasMany(Order, {
    foreignKey: 'user_id',
});

User.hasMany(Review, {
    foreignKey: 'user_id'
});

export default User;