const request = require("supertest");

const server = require("./api/server");

describe("server", () => {
  describe("jokes route", () => {
    it("should return return error without jwt", () => {
      return request(server)
        .get("/api/jokes")
        .then(res => expect(res.status).toEqual(401));
    });

    it("should return a JSON object", async () => {
      const response = await request(server).get("/api/jokes");

      expect(response.type).toEqual("application/json");
    });
  });

  describe("register route", () => {
    it("should return return error without username/password in body", () => {
      return request(server)
        .post("/api/auth/register")
        .then(res => expect(res.status).toEqual(500));
    });

    it("should return a test response", async () => {
      const response = await request(server).get("/api/auth/register");

      expect(response.type).toEqual("text/html");
    });
  });

  describe("login route", () => {
    it("should return return error without username/password in body", () => {
      return request(server)
        .post("/api/auth/login")
        .then(res => expect(res.status).toEqual(400));
    });

    it("should return a text response", async () => {
      const response = await request(server).get("/api/auth/login");

      expect(response.type).toEqual("text/html");
    });
  });
});
