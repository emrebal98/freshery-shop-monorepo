"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pino_1 = __importDefault(require("pino"));
exports["default"] = (0, pino_1["default"])({
    transport: {
        target: 'pino-pretty'
    }
});
