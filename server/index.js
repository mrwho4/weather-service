import http from 'http'
import Debug from 'debug'

const PORT = 3000
const debug = new Debug('weather-board:root')

const app = http.createServer((req, res) => {
  debug('New request')
  res.writeHead(200, {'Content-Type' : 'text/plain' })
  res.write('Hola desde WeatherBoards')
  res.end()
})

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})