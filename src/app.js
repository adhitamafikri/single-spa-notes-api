import express from 'express'
import bodyParser from 'body-parser'
import 'module-alias/register'
import 'dotenv/config'

import { APP_PORT } from '@config/app'
import { BASE_URL } from '@config/url'
import loadRoutes from '@routes'

const app = express()

// Middlewares
app.use(bodyParser.json())

// Routes
app.use(`${BASE_URL}`, loadRoutes())

app.listen(APP_PORT, () => {
  console.log(`running on ${APP_PORT}`)
})
