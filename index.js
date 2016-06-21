/**
 * PSAPI
 * https://github.com/JamesxX/psapi
 *
 * Copyright (c) 2016 James R Swift
 * Licensed under the GNU GPLv3 license.
 */
 
"use strict";

this.psapi = {};
var psapi = this.psapi;

psapi.User = require('./user.js');
psapi.Connection = require('./connection.js');

module.exports = psapi;