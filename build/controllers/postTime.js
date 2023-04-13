"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postTime = (_req, res) => {
    const day = new Date();
    res.send(day);
};
exports.default = postTime;
