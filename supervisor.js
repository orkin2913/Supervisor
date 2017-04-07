/*
	Supervisor
	Copyright (C) 2017  Orkin (AVNTeam.net)

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <http://www.gnu.org/licenses/>.
	
*/


// sudo npm install -g is-running

var 	exec = require('child_process').spawn,
		fs = require('fs');
var i = -1;

check();
setInterval(function() {
		check();
}, 10000);


function check() {
	fs.readFile('ts3server.pid', 'utf8', function (err, data) {
		if (!err) {
			var pid = data.split("\n"); pid = pid[0];
			var isRunning = require('is-running')(pid);
			if (!isRunning) {
				if (i < 3) {
					run();
				} else {
					exit();
				}
			} else {
				i = 0;
			}
		} else {
			if (i < 3) {
				run();
			} else {
				exit();
			}
		}
	});
}

function run() {
	var argv;
	if (process.argv[2]) argv = ['start', process.argv[2]];
	else argv = ['start'];
	var child = exec('./ts3server_startscript.sh', argv, {
		detached: true
	});
	child.unref();
	i++;
}

function exit() {
	//Powiadom admina
	
	//Wyjdź
	process.exit();
}