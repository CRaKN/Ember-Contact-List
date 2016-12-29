import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteContact: function(id) {
            this.store.findRecord('contact', id).then(function(contact) {
                contact.deleteRecord();

                contact.save();
            })
        }
    }
});
