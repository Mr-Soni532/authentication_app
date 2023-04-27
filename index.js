const express = require('express');
const connectMongo = require('./config/db');
const authRouter = require('./router/auth.router');
const userRouter = require('./router/user.router');
const cors = require('cors')
const authentication = require('./middleware/authentication.middleware');

const app = express();
app.use(cors())
app.use(express.json());

app.get('/', (req,res)=> res.send("working..."))
app.use('/auth',authRouter)
app.use('/user',authentication,userRouter)

app.listen(4000, async () => {
    try {
        await connectMongo();
        console.log('server @ 4000')
    } catch (error) {
        console.log(error)
    }
})