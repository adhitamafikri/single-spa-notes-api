import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import 'regenerator-runtime'
import 'dotenv/config'

import loadRoutes from './routes'
import { API_BASE_URL } from './config/url'
import { APP_PORT } from './config/app'

const app = express()

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use(`${API_BASE_URL}`, loadRoutes())

const PORT = process.env.PORT || APP_PORT
app.listen(PORT, () => {
  console.log(`app running on ${PORT}`)
})
