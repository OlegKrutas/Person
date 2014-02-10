var EditView = Backbone.View.extend({	
	
	edit_template: _.template($('#edittemplate').html()),	
	preview_template: _.template($('#previewtemplate').html()),    
    text: '',

    events: {
	    'click #tab1': 'showNameTab',
		'click #tab2': 'showContactsTab',
		'click #tab3': 'showPersonalTab',
		'click #preview': 'previewClick',
		'click #edit': 'showInfoForm',
        'click #save': 'saveClick'
	},
   
	showNameTab: function() {
        this.$el.find('#name').show();
        this.$el.find('#contacts').hide();
        this.$el.find('#personal').hide();
    },

    showContactsTab: function () {
        this.$el.find('#name').hide();
        this.$el.find('#contacts').show();
        this.$el.find('#personal').hide();
    },

    showPersonalTab: function () {
        this.$el.find('#name').hide();
        this.$el.find('#contacts').hide();
        this.$el.find('#personal').show();
    },
	
	subscriptions: {
	    'channel1': 'saveAndRender'                     
	},

	saveAndRender: function (text) { 
        this.text = text;               
        this.render(text);       
    }, 

    showInfoForm: function () {
        this.$el.find('#form').show();
        this.$el.find('#save').show();
        this.$el.find('#previewform').hide();
        this.$el.find('#edit').hide();
        this.$el.find('#preview').show();
    },

    showPreviewForm: function () {
        this.$el.find('#previewform').show();
        this.$el.find('#edit').show();
        this.$el.find('#form').hide();
        this.$el.find('#preview').hide();
    },
    
    savePersonInfo: function (text) {
        var keys_of_person_info = ['name', 'lastName', 'skype', 'phone', 'email', 'sex', 'age'],
            model = text; 
            
        _.each (this.$el.find('.InfoFields'), function(value, i){            
            model.set(keys_of_person_info[i], $(value).val());            
        });          
        this.text.save();
    },

    previewClick: function () {             
        this.savePersonInfo(this.text);
        this.render(this.text);        
        this.showPreviewForm();
    },

    saveClick: function () {        
        this.savePersonInfo(this.text);
        this.$el.hide();        
    },
		
	render: function (text) {        
		this.$el.html(this.edit_template({model: text.toJSON()}));
        this.$el.find('#previewform').html(this.preview_template({model: text.toJSON()}));        
		return this;
	},   
			
	initialize: function () {		
        this.$el.show();          
	}

});
