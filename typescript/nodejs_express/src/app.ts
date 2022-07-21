import express from "express";

const app = express();

class JsonResponse {
  private port: number = process.env.PORT ? parseInt(process.env.PORT) : 8080;
  private environment: string = process.env.NODE_ENV || "";
  private status = "online";

  getResponse = () => {
    return {
      environment: this.environment,
      port: this.port,
      status: this.status,
    };
  };
}

app.use("/", (request, response, next) => {
  const responseObj = new JsonResponse();

  response.json(responseObj.getResponse());

  return next();
});

export default app;
