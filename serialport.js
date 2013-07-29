var stream = require('stream'),
    util = require('util');

function SerialPort(path, options, openImmediately) {
  var self = this;

  stream.Stream.call(this);

  this.path = path;
  this.options = options;

  openImmediately = (openImmediately === undefined || openImmediately === null) ? true : openImmediately;
  if (openImmediately) {
    setTimeout(function() {
      self.open();
    }, 0);
  }
}

SerialPort.prototype.open = function(callback) {
  var self = this;
  chrome.serial.open(this.path, this.options, function(openInfo) {
    self.connectionId = openInfo.connectionId;
    if (self.connectionId == -1) {
      var err = new Error("Could not open serial port.");
      self.emit('error', err);
      if (callback) callback(err);
      return;
    }

    self.emit('open');
    if (callback) callback();
  });
}

util.inherits(SerialPort, stream.Stream);
exports.SerialPort = SerialPort;

exports.list = function(cb) {
  chrome.serial.getPorts(function(portNames) {
    cb(null, portNames.map(function(name) {
      return { comName: name };
    }));
  });
}