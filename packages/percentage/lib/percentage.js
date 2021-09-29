"use strict";
module.exports = {
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
  percentage: function (current, total) {
    return Math.floor((Number(current) * 100) / Number(total));
  },
};
