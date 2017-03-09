import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './client.html';

Template.header.events({
    'click #demo': function () {

        console.log("You clicked me!");

    },
    'submit form': function (event) {

        event.preventDefault();
        //console.log("A message was entered: " + event.target.addMessage.value);
        Messages.insert({
            user: Meteor.user().emails[0].address,
            message: event.target.addMessage.value,
            when: new Date(),
        });

        event.target.addMessage.value = ''; // reset the value

    },
});

Template.main.helpers({
    messages: function () {
        return Messages.find().fetch();
    }
});