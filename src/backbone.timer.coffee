if module?.exports
	Backbone = require 'backbone'
else if @Backbone
	Backbone = @Backbone
else
	throw new Error 'Backbone not found'



class Timer
	constructor: (interval) ->
		@_interval = interval
		@_id = null

	start: ->
		if !@_id
			@_id = setInterval(=>
				@trigger 'timer', @
			, @_interval)
		@

	stop: ->
		@_id and clearInterval(@_id)
		@_id = null
		@

	reset: ->
		if @running()
			@stop()
			@start()
		@

	running: -> !!@_id

Timer.prototype = _.defaults(Timer.prototype, Backbone.Events)



if module?.exports
	module.exports = Timer: Timer
else if @Backbone?
	@Backbone.Timer = Timer