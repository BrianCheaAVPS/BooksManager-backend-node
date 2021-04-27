import express              from 'express'
import * as controllers     from './controllers';
import bodyParser           from 'body-parser';
import mongoose             from 'mongoose';

require('dotenv').config() 

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))
const server = express();
server.listen(3000, () => console.log('listening at 3000'));
server.use(express.json({limit: '80mb'})) //bodyParser is deprecated
server.use(express.static('public'))
Object.keys(controllers).forEach(k=>{
    console.log("+++++++++++++++++++controller: " + k + " will map to: " + controllers[k].route);
    server.use(controllers[k].route, controllers[k].controller)
});