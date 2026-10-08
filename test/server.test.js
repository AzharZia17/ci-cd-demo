const request = require("supertest");
const app = require("../src/server");

describe("GET /", () => {
    test("should return Hello CI/CD!", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello CI/CD!");
    });
});