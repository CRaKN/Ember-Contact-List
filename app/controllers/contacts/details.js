import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        deleteContact: function(id) {
            let self = this
            this.store.findRecord('contact', id).then(function(contact) {
                contact.deleteRecord();

                contact.save();

                self.transitionToRoute('contacts');
            })
        }
    }
});
