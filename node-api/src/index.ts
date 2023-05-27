import express, { Application, Request, Response } from "express";
import http from "http";
import https from "https";
import compression from "compression";
import morgan from "morgan";
import cors from "cors";
import ErrorHandler from "./middleware/error/ErrorHandle.middleware";

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3001;
http.globalAgent.maxSockets = Infinity;
https.globalAgent.maxSockets = Infinity;

const shouldCompress = (req: Request, res: Response) => {
  if (req.headers["x-no-compression"]) {
    return false;
  }
  return compression.filter(req, res);
};
app.use(morgan("tiny"));
app.use(compression({ filter: shouldCompress }));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "DEVELOPMENT") {
  const allowlist = ["http://localhost:3000", "http://localhost:3099"];
  const corsOptionsDelegate: cors.CorsOptionsDelegate<any> = (
    req,
    callback
  ) => {
    const corsOptions =
      allowlist.indexOf(req.header("Origin")) !== -1
        ? { origin: true }
        : { origin: false };
    callback(null, corsOptions);
  };
  app.use(cors(corsOptionsDelegate));
}

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});
app.use(ErrorHandler);
try {
  app.listen(PORT, (): void => {
    console.log(`Connected successfully on PORT ${PORT}`);
  });
} catch (error: any) {
  console.error(`Error occurred: ${error.message}`);
}
