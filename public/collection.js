var CollectionOfPersons = Backbone.Collection.extend({	    
    model: Person,
    url: 'people',

    initialize: function () {
        this.fetch();       
    }
});








