const https = require('https')
const fs = require('fs')


const hostname = '127.0.0.1'
const port = '8080'

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('certificate.pem')
}

const server = https.createServer(options, (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World!\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`)
})