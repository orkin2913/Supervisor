# Supervisor for TeamSpeak 3 process 
 [![Node.js](http://i.imgur.com/J3acu8r.png)](http://nodejs.org)

Supervisor monitors TeamSpeak server process and restarts if necessary.

  - [Installation](#installation)
  - [Configuration](#configuration)
  - [License](#license)

### It's as simple as can be
  - Install [node.js]
  - Upload file to your server
  - Run it
  - Magic!


## Installation
Supervisor requires [node.js] v6+ and build tools to run. [Install instructions.]

Install screen, node.js and build tools (example for Ubuntu and Debian)
```sh
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y screen nodejs build-essential
```

Upload file to your your TeamSpeak 3 server folder

Install the dependencies and start the bot.

```sh
$ cd [YOUR TEAMSPEAK3 SERVER FOLDER]
$ npm install is-running
$ screen -AmdS SUPERVISOR node supervisor.js
```

## Configuration
To start your server with inifile paremeter:
```sh
$ screen -AmdS SUPERVISOR node supervisor.js inifile=[INI FILE NAME]
```

## License
GPL-3.0
You can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.


**Always free. Always fancy.**

   [node.js]: <http://nodejs.org>
   [Install instructions.]: <https://nodejs.org/en/download/package-manager/>
