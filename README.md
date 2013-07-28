Chrome SerialPortify
====================
A node-serialport compatible API for Chrome Apps!

Introduction
------------
This library provides an API that is mostly compatible with
the one provided by the Node.js library node-serialport. With
the help of Browserify developers can port existing Node.js code
dependent on node-serialport to their Chrome Apps.

Install
-------
Grab the latest release from NPM...

  npm install chrome-serialportify

Then use Browserify to bundle it into your Chrome App.

  browserify main.js -o bundle.js

References
----------
[node-serialport](https://github.com/voodootikigod/node-serialport)
[chrome.serial](http://developer.chrome.com/apps/serial.html)
[Browserify](http://browserify.org/)
