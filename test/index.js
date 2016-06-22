var expect = require('chai').expect;

var psapi = require('../index.js'),
    PSConnection = psapi.Connection,
	User = psapi.User;
	
var util = require('util');

describe("Pointshop API", function() {
	
	var Pointshop;
	
	before(function(done){
		Pointshop = new PSConnection('localhost', 'root', '', 'psapi_test', function( API ){
			done();
		});
	});
	
	// User stuff
	
	it("can get a user", function(){
		expect(Pointshop.GetUser("1")).to.be.an.instanceof(User);
	})
		
	it("can get the items of a user", function(){
		expect(Pointshop.GetUser("1").GetItems( )).to.be.an('object');
	})
	
});