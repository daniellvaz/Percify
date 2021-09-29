const percentage = require("@percify/percentage");

/**
 * expect returns Percentage: 10%
 * params type number
 */
console.log("Percentage: " + percentage(150, 1500) + "%");

/**
 * expect returns Percentage: 10%
 * params type string
 */
console.log("Percentage: " + percentage("150", "1500") + "%");
