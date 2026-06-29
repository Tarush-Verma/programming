import express from 'express'
import userRouter from './routes/user.routes.js'
import adminRouter from './routes/admin.routes.js'
import {authenticationMiddleware} from './middlewares/auth.middleware.js'
import jwt from 'jsonwebtoken'
const app = express()

const PORT = process.env.PORT ?? 8000 
app.use(express.json())

app.use(authenticationMiddleware)

app.get('/' , (req , res) => {
    return res.json({status : `server is running`})
})

app.use('/user' , userRouter)
app.use('/admin' , adminRouter)

app.listen(PORT ,() => console.log(`server is running on port ${PORT}`))