angular.module('services')
	
	.service('metaService', function() {
       var title = 'title';
       var metaDescription = 'description';
       return {
          set: function(newTitle, newMetaDescription) {
              metaDescription = newMetaDescription;
              title = newTitle; 
          },
          metaTitle: function(){ return title; },
          metaDescription: function() { return metaDescription; }
       }
    });