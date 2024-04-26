const sequelize = require("sequelize");
const db = require("../database/db");

var deptModel = db.define(
    "dept",
    {
        deptno: { type: sequelize.INTEGER, primaryKey: true },
        dname: { type: sequelize.STRING },
        loc: { type: sequelize.STRING } 
    },
    {
        // freeze name table not using *s on name
        freezeTableName: true,
        // dont use createdAt/update
        timestamps: false,
    }
);
module.exports = deptModel;