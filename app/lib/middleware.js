import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

export const corsMiddleware = initMiddleware(
  Cors({
    methods: ["GET", "POST", "PUT", "OPTIONS", "DELETE"],
  })
);
