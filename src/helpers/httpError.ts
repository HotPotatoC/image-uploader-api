import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class HttpError extends Error {
  public status!: number;
  public message!: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export function createHttpError(status: number, message: string): HttpError {
  return new HttpError(status, message);
}

export const error: ErrorRequestHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({
    status,
    message,
  });
};
