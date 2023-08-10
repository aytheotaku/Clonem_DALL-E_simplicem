import express, {Request, Response} from 'express';
import { getHomePage } from './controllers/getHomePage.js';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT  = process.env.PORT

app.use(express.json())
app.get('/', getHomePage);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
