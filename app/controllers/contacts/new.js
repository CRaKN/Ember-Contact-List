import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addContact() {
            let firstName = this.get('firstName');
            let lastName = this.get('lastName');
            let email = this.get('email');
            let phoneNumber = this.get('phoneNumber');
            let created = new Date();

            let newContact = this.store.createRecord('contact', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                created: created
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
