const http = require('http')
const sql = require('mysql')

const hostname = '127.0.0.1'
const port = '7070'

var con = sql.createConnection ( {
	host: "localhost",
	user: "root",
	password: "",
	database: "testDB"
})

//Connect to the database and retrieving values from a table
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected Successfully!")

	var qString = "select * from student"
	con.query(qString, function(err, result, fields) {
		if(err) throw err;
		console.log(result);

		//print each field separately
		console.log(result[0].stfName);
		console.log(result[1].stfName);
	})
})