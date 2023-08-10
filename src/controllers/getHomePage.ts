import { Request, Response, NextFunction } from "express";

export const getHomePage = (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello World')
}
