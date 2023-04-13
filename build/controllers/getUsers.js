"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsers = (req, res) => {
    res.send([{ name: "David", age: 37, pass: 123 }, `Request url: ${req.url}`]);
};
exports.default = getUsers;
