/**
 * PSAPI
 * https://github.com/JamesxX/psapi
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */

"use strict";

var mysql = require('mysql'),
    User = require('./user.js');

class Connection{
	constructor( ip, user, pw, db, OnConnect){
		this.Connection = mysql.createConnection({
			host     : ip,
			user     : user,
			password : pw,
			database : db
		});
		
		this.Users = {};
		var THIS_OBJECT = this;
		
		this.Connection.query('SELECT * FROM pointshop_data', function(err, rows, fields) {
			if (err) throw err;
			
			for (var i = 0; i < rows.length; i++) { 
				var row = rows[i]
				THIS_OBJECT.Users[row.uniqueid] = new User(row.uniqueid, row.points, row.items, this);
			}
			OnConnect( this );
		});
	}
	
	InvalidateUser( ID, Instance ){
		this.Users[ ID ] = Instance;
		this.Connection.query(
			"UPDATE pointshop_data SET points="+ Instance.GetPoints() +", items='"+ JSON.stringify(Instance.GetItems()) +"' WHERE uniqueid='"+ Instance.GetUniqueID()+"'",
			function(err, rows, fields){
				if (err) throw err;
			}
		);
	}
	
	GetUser( ID ){ return this.Users[ ID ]; }
}

module.exports = Connection;