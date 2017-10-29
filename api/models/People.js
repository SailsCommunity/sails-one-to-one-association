/**
 * People.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    tableName: "people",
    attributes: {
        id: {
            type: "integer",
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: "string"
        },
        age: {
            type: "integer"
        },
        country: {
            type: "integer"
        },
        food: {
            model: "FoodItems",
            columnName: "food_id"
        }
    }
};

