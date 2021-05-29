/* Node.js App that uses an User Defined Module
	called dateTimeModule
*/
const http = require('http')
const date = require('./dateTimeModule')

const hostname = '127.0.0.1'
const port = '8090'

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type' : 'text/html'})
	res.write("<h1>The current date and time are: </h1>" + date.myDateTime())
	res.write("<br>")
	res.end("End of the Program")
})

server.listen (port, hostname, () => {
	console.log(`Node Server is running at http://${hostname}:${port}/`)
})