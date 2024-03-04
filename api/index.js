import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

mongoose
  .connect(process.env.MANGO)
  .then(() => {
    console.log('📢 Connected to MongoDB ❤️')
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()

app.listen(process.env.SERVER_PORT, () => {
    console.log('🎉 Server is running on port', process.env.SERVER_PORT)
})