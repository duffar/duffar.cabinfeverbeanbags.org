import {
    Template
} from 'meteor/templating';

import './body.html';

// counter starts at 0
Session.setDefault('counter', 0);

Template.hello.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.hello.events({
    'click #import_auction': function () {
        Meteor.call('importSilentAuctionData');
    },
    'click #import_teams': function () {
        Meteor.call('importTeamData');
    }

});
