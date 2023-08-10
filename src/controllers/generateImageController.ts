import { Request, Response, NextFunction} from 'express'
import { generateImage } from '../helpers/generateImageFunction'

export const generateImageController = async (req: Request, res: Response, next: NextFunction) => {

    const prompt : string = req.body.prompt

    if(!prompt) return res.status(400).json({ status: 400, message: `Bad Request, 'prompt' field missing / empty`})
    if(typeof(prompt) !== 'string') return res.status(400).json({ status: 400, message: `Bad Request, 'prompt' field must be a string`})


    try {
        const imageLink: string = await generateImage(prompt)
        res.json({ success:'true', status:'200', url:imageLink })
    } 
    catch (error) {
        next(error)
    }
   
}