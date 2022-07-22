import type { HttpFunction } from "@google-cloud/functions-framework";

export const status: HttpFunction = (request, response) => {
  if (request.method !== "GET") {
    return response.status(405).end();
  }

  response.json({ status: "online" });
};
