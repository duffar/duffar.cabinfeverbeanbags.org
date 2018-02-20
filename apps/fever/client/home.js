//
//Template.TripList.helpers({
//  getFeaturedTrips: function () {
////  return Trips.find({},{sort: {depart: 'asc'}});
//    return Trips.find({featuredTrip:true});
//  },
//  maybe_trip_selected: function() {
//    return Session.equals('selected_trip', this._id) ? 'highlight' : '';
//  },
//  getDepartDate: function() {
//    return this.departRoute[0].date;
//  },
//  getReturnDate: function() {
//    return this.returnRoute[0].date;
//  },
//  trip_selected: function(trueVal, falseVal) {
//    return (Session.get('selected_trip')!=null) ? trueVal : falseVal;
//  },
//  currentUserStatus: function() {
//    var booking = Bookings.findOne({tripId: this._id});
//    return booking!=null ? booking.bookingStatus : '';
//  },
//  trip_booked: function(trueVal, falseVal) {
//    return (Bookings.findOne({tripId: Session.get('selected_trip')})!=null) ? trueVal : falseVal;
//  }
//});
//
//Template.TripList.events({
//  'click #trip-list tr': function() {
//    if (Session.get('selected_trip')==this._id) {
//      Session.set('selected_trip', null);
//    } else {
//      Session.set('selected_trip', this._id);
//    }
//  },
//  'click #bookit': function() {
//    var selectedTrip = Session.get('selected_trip');
//    var booking = Bookings.findOne({tripId:selectedTrip});
//    if (selectedTrip!=null && booking==null) {
//      // create a booking - TODO: swap with a real booking purchase dialog...
//      var bookingId = Bookings.insert({
//        bookingNumber: Math.floor(Math.random()*10000),
//        tripId: selectedTrip,
//        userId: Meteor.userId(),
//        bookingStatus: 'interested',
//        orderDetails: {
//          tickets: [
//            {
//              type: 'bus',
//              count: 2,
//              personalInfo: [
//                {
//                  firstName: 'Brad',
//                  lastName: 'Ryan'
//                },
//                {
//                  firstName: 'Jeff',
//                  lastName: 'Ryan'
//                }
//              ]
//            }
//          ],
//          paymentConfirmed: 'true',
//          transactionNumber: Math.floor(Math.random()*10000000)
//        },
//        userNotes: 'its gonna be awesome!'
//      });
//    }
//  },
//  'click #cancelBook': function() {
//    var selectedTrip = Session.get('selected_trip');
//    var booking = Bookings.findOne({tripId:selectedTrip});
//    if (booking!=null) {
//      // TODO: cancel the transaction... for now just delete the booking
//      Bookings.remove({_id: booking._id});
//    }
//  }
//});
//


UI.registerHelper('formatTime', function (context, options) {
  if (context)
    return moment(context).format('llll');
  //    return moment(context).format('MM/DD/YYYY, hh:mm');
});

UI.registerHelper('isAdmin', function () {
  return Meteor.user() && Meteor.user().profile && Meteor.user().profile.role == 'admin';
});
