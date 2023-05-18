import { Sequelize } from "sequelize";

const db = new Sequelize('cherry_invitation', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;