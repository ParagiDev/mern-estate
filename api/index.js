import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config()

mongoose
  .connect(process.env.MANGO)
  .then(() => {
    console.log('📢 Connected to MongoDB')
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()

app.use(express.json())

app.listen(process.env.SERVER_PORT, () => {
    console.log('🎉 Server is running on port', process.env.SERVER_PORT)
})

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    })
  })