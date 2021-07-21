const request = require("supertest");
const server = require("../server");
const Player = require("../models/Player");
test("Should signup a new player", async () => {
	// let username;
	// if (username === undefined || username === "") username = "ANONYMOUS";
	const res = await request(server)
		.post("/players")
		.send({
			username: "sayeed",
		})
		.expect(201);
	console.log(res);
});
