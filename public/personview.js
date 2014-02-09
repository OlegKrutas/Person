var PersonView = Backbone.View.extend({
	
	tagName: 'tr',		
	persontemplate: _.template($('#modeltmp').html()),
	
	render: function () {	    		
		this.$el.html(this.persontemplate({model: this.model.toJSON()}));	
		return this;
	},

	events: {
		'contextmenu': 'loggingInfo',
		'click #remove': 'removeModel'
	},

	loggingInfo: function (e) {	    		
		event.preventDefault();					
	    Backbone.Mediator.pub('channel1', this.model);	    	    	    
    },
	
	removeModel: function () {
	    this.$el.remove();	    
	    this.model.destroy();
	},
	
	initialize: function () {   		
		this.model.on('change', this.render, this);

	}
	
});
