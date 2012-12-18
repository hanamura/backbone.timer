(function() {
  var Backbone, Timer;

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    Backbone = require('backbone');
  } else if (this.Backbone) {
    Backbone = this.Backbone;
  } else {
    throw new Error('Backbone not found');
  }

  Timer = (function() {

    function Timer(interval) {
      this._interval = interval;
      this._id = null;
    }

    Timer.prototype.start = function() {
      var _this = this;
      if (!this._id) {
        this._id = setInterval(function() {
          return _this.trigger('timer', _this);
        }, this._interval);
      }
      return this;
    };

    Timer.prototype.stop = function() {
      this._id && clearInterval(this._id);
      this._id = null;
      return this;
    };

    Timer.prototype.reset = function() {
      if (this.running()) {
        this.stop();
        this.start();
      }
      return this;
    };

    Timer.prototype.running = function() {
      return !!this._id;
    };

    return Timer;

  })();

  Timer.prototype = _.defaults(Timer.prototype, Backbone.Events);

  if (typeof module !== "undefined" && module !== null ? module.exports : void 0) {
    module.exports = {
      Timer: Timer
    };
  } else if (this.Backbone != null) {
    this.Backbone.Timer = Timer;
  }

}).call(this);
