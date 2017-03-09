import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './client.html';

Template.header.events({
    'click #demo': function () {

        console.log("You clicked me!");

    }
});

Template.main.helpers({
    message: "I'm a MESSAGE!"
});