import { Request, Response, NextFunction } from "express";

export const getHomePage = (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send('Welcome to the home route')
}
