const Sequelize = require("sequelize");
const db = require("../database/db");
const deptModel = require("./dept.model");

const empModel = db.define(
    "emps",
    {
        empno: { type: Sequelize.INTEGER, primaryKey: true },
        ename: { type: Sequelize.STRING },
        job:   { type: Sequelize.STRING },
        salary: { type: Sequelize.INTEGER },
        deptno: { 
            type: Sequelize.INTEGER,
            references: { model: deptModel, key: "deptno" } // Define foreign key
        }  
    },
    {
        // Freeze table name not using *s on name
        freezeTableName: true,
        // Don't use createdAt/updateAt
        timestamps: false,
    }
);

module.exports = empModel;