import express from 'express'

const app = express.Router()

const place = {
  _id: 1,
  name: 'Buenos Aires',
  temperature: '20º',
  descripcion: 'Parcialmente nublado',
  lastUpdate: new Date(),
  icon: 'nubecita'
}

const places = new Array(10).fill(place)

// /api/places
app.get('/', (req, res) => res.status(200).json(places))

// /api/places/:id
app.get('/:id', (req, res) => res.status(200).json(place))


export default app