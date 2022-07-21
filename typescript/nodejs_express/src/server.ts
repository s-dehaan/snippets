import app from "./app";

const PORT = Number(process.env.PORT) || 8080;

app.listen(PORT, () => {
  console.log(`Application listening on port: ${PORT}`);
  console.log("Press Ctrl+C to exit the application");
});
