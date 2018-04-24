import express from 'express'
import { place } from "./routes";

const app = express()

app.use('/api/places', place)

export default app