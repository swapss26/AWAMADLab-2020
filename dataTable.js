/* Node.js App for Database Table Creation */
const http = require('http')
const sql = require('mysql')

const hostname = '127.0.0.1'
const port = '7070'

//Create a database connection variable
var con = sql.createConnection ( {
	host: "localhost",
	user: "root",
	password: "",
	database: "testDB"
})

//Connect to the database and creating a table in selected database
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected Successfully!")

	var qString = "create table student (studentID int not null, stfName varchar(50), stlName varchar(50), class varchar(20), PRIMARY KEY (studentID))"
	con.query(qString, function(err, result) {
		if(err) throw err;
		console.log("Table created Successfully!")
	})
})