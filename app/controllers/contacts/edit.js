import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editContact: function (id) {
      let self = this;

      let firstName = this.get('model.firstName');
      let lastName = this.get('model.lastName');
      let email = this.get('model.email');
      let phoneNumber = this.get('model.phoneNumber');

      this.store.findRecord('contact', id).then(function (contact) {
        contact.set('firstName', firstName);
        contact.set('lastName', lastName);
        contact.set('email', email);
        contact.set('phoneNumber', phoneNumber);

        contact.save();

        self.transitionToRoute('contacts.details', id);

      })
    }
  }
});
