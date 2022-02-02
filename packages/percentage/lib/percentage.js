"use strict";

/**
 * Define object prototype.
 */
Object.defineProperty(Object.prototype, "format", {
  value: function () {
    return this.toString() + "%";
  },
});

/**
 *The first params is the current value to get a real percentage.
 *The second params is the total value.
 *
 * (current * 100) /total
 *
 * @param {number | string} current
 * @param {number | string} total
 * @returns {number}
 */
const percify = {
  percentage: function (current, total) {
    return Math.floor((Number(current) * 100) / Number(total));
  },
};

module.exports = percify;
