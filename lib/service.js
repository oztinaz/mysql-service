"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mysql = require("mysql");
class AbstractMysqlService {
  constructor(config) {
    this.pool = (0, _mysql.createPool)(config);
  }
  async execute(query) {
    return new Promise(async (resolve, reject) => {
      this.pool.query(query, (error, results, fields) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  }
}
var _default = AbstractMysqlService;
exports.default = _default;