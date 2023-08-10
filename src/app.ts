import express, {NextFunction, Request, Response} from 'express';
import createError from 'http-errors';
import { getHomePage } from './controllers/getHomePage.js';
import { generateImageController } from './controllers/generateImageController.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT  = process.env.PORT



app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/', getHomePage)
app.get('/api', (req:Request, res:Response, next:NextFunction) => res.redirect('/'))
app.post('/api/image', generateImageController);




app.use(async (req:Request, res:Response, next:NextFunction) => {
    next(createError.NotFound())
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


app.use((err:any, req:Request, res:Response, next: NextFunction) => {
    res.status(err.status || 500)
    res.send({
        success: "false",
        message: "An error has occurred",
        status: err.status || 500,
        error: [{
            message: err.message
        }]
    })
})

