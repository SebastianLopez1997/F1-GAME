"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_token_1 = __importDefault(require("../routes/validate-token"));
const router = (0, express_1.Router)();
router.get('/:id', validate_token_1.default, user_controller_1.getUserData);
router.post('/', user_controller_1.nuevoUsuario);
router.post('/login', user_controller_1.login);
exports.default = router;
