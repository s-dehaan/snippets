import app from "../app";
import request from "supertest";

const server = app.listen();

describe("Checking if the application is running", () => {
  const env = process.env;

  afterAll(() => {
    process.env = env;
    server.close();
  });

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  test("GET /", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.environment).toBe("test");
    expect(response.body.port).toBe(8080);
    expect(response.body.status).toBe("online");
  });

  test("GET / without NODE_ENV set.", async () => {
    process.env.NODE_ENV = undefined;
    const response = await request(server).get("/");
    expect(response.body.environment).toBe("");
  });

  test("GET / with PORT set.", async () => {
    process.env.PORT = "1234";
    const response = await request(server).get("/");
    expect(response.body.port).toBe(1234);
  });
});
