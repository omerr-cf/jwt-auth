import express, { Request, Response } from "express";
import cors from "cors";

const PORT = 3030;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});
app.post("/", (request: Request, response: Response) => {
  response.status(200).send(request.body);
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
