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

//Connect to the database and inserting values into a table
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected Successfully!")

	var qString = "insert into student (studentID, stfName, stlName, class) values (2, 'Shyam', 'Sharma', 'TY')"
	con.query(qString, function(err, result) {
		if(err) throw err;
		console.log("1 RECORD INSERTED SUCCESSFULLY!")
	})
})