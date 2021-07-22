const request = require("supertest");
const server = require("../server");
const Player = require("../models/Player");

test("should create a new user", async () => {
	const res = await request(server).post("/players").send({
		username: "sayeed",
	});
	console.log(res);
	expect(res.statusCode).toEqual(201);
	expect(res.body).toHaveProperty("username");
});
