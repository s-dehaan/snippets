import { getTestServer } from "@google-cloud/functions-framework/testing";
import * as functions from "@google-cloud/functions-framework";
import supertest from "supertest";
import { status } from "../server";

describe("status", () => {
  beforeAll(() => {
    functions.http("status", status);
  });

  test("GET /", async () => {
    const server = getTestServer("status");
    const response = await supertest(server).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("online");
  });

  test("Any method besides GET should return 405", async () => {
    const server = getTestServer("status");
    const response = await supertest(server).post("/");
    expect(response.statusCode).toBe(405);
  });
});
