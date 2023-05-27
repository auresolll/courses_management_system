import { NextFunction, Request, Response } from "express";

export const setCache = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const period = 60 * 2;

  if (req.method == "GET") {
    res.set("Cache-control", `routers, max-age=${period}`);
  } else {
    res.set("Cache-control", `no-store`);
  }

  next();
};
