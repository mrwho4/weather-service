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

// GET /api/places
app.get('/', (req, res) => res.status(200).json(places))

// GET /api/places/:id
app.get('/:id', (req, res) => {
  const { id } = req.params
  const q = questions.find(({ _id }) => _id === +id)
  res.status(200).json(q)
})

// POST /api/places
app.post('/', (req, res) => {
  const place = req.body
  place._id = +new Date()
  place.lastUpdate = new Date()
  places.push(place)
  res.status(201).json(place)
})


export default app