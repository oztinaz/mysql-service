"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("reflect-metadata");
var _inversify = require("inversify");
var _mysql = require("mysql");
var _dec, _dec2, _dec3, _dec4, _class;
let AbstractMysqlService = (_dec = (0, _inversify.injectable)(), _dec2 = function (target, key) {
  return (0, _inversify.unmanaged)()(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [Object]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AbstractMysqlService {
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
}) || _class) || _class) || _class) || _class);
var _default = AbstractMysqlService;
exports.default = _default;