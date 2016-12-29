import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addContact: function() {
            let firstName = this.get('firstName');
            let lastName = this.get('lastName');
            let email = this.get('email');
            let phoneNumber = this.get('phoneNumber');

            let newContact = this.store.createRecord('contact', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber
            });

            newContact.save();

            this.setProperties({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: ''
            });
        }
    }
});
