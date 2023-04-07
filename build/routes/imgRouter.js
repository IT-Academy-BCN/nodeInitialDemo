"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postImg_1 = __importDefault(require("../controllers/postImg"));
const router = express_1.default.Router();
router.post("/img", postImg_1.default);
exports.default = router;
