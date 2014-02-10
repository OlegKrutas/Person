var CollectionView = Backbone.View.extend({
	
	collection: new  CollectionOfPersons(),
	collectiontemplate: _.template($('#coltmp').html()),
	
	render: function () {	    	    		    
		this.$el.html(this.collectiontemplate());					
	    this.collection.each(this.renderModel, this);
		//this.collection.on('add', this.renderModel, this);				
	    return this;

    },  
    
    events: {
    	'click #add': 'addNewPerson'    
    },

    addNewPerson: function () {
    	var new_person = new Person();    	
    	this.collection.add(new_person);    	
    	new_person.save();
    },

    renderModel: function (element) { 	                       
                    var view = new PersonView({model: element});                                     
                    var result = view.render();
                    this.$el.find('table').append(view.render().el);
                    return this;
	},
	 
	initialize: function () {		
		this.collection.on('sync', this.render, this);					
	}
});


