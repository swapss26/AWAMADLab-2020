/* Node.js App for Database Creation */
//const http = require('http')
const sql = require('mysql')

const hostname = '127.0.0.1'
const port = '7070'

//Create a database connection variable
var con = sql.createConnection ( {
	host: "localhost",
	user: "root",
	password: ""
})

//Connect to the database and creating a database
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected Successfully!")

	con.query("create database testDB", function(err, result) {
		if(err) throw err;
		console.log("Database Created Successfully!")
	})
})