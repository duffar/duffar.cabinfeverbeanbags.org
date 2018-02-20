Donations = new Mongo.Collection('donations');
DBFiles = new Meteor.Collection('dbfiles');

Meteor.startup(function () {
  Donations.attachSchema(DonationSchema);
  if (Meteor.isClient) {
    DonationsSub = Meteor.subscribe("donations");
    DBFilesSub = Meteor.subscribe("dbfiles");
  }
});



if(Meteor.isServer){
  Meteor.methods({
    'deleteImages':function(){
      DBFiles.remove({});
    }
  })
}


if (Meteor.isServer) {


  // What records to publish
  Meteor.publish('donations', function () {
    return Donations.find();
  });
  // Reasons to allow an operation (only one needs to be true to allow the operation)
  Donations.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  // Reasons to deny an operation (only one needs to be true to disallow the operation)
  Donations.deny({
    insert: function (userId, doc) {
      return false;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },
    remove: function (userId, doc) {
      return false;
    }
  });


  // What records to publish
  Meteor.publish('dbfiles', function () {
    return DBFiles.find({user: this.userId});
  });
  // Reasons to allow an operation (only one needs to be true to allow the operation)
  DBFiles.allow({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  // Reasons to deny an operation (only one needs to be true to disallow the operation)
  DBFiles.deny({
    insert: function (userId, doc) {
      return false;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },
    remove: function (userId, doc) {
      return false;
    }
  });


}

//
////Location:
////  - name
////  - description
////  - gps
////    - lat
////    - long
////  - address
////    - addr1
////    - addr2
////    - city
////    - state
////    - zip
//Locations = new Meteor.Collection('locations');
//
///**
// * Trip Collection:
// *  - name
// *  - departRoute: Array of StopPoints [initially 2 (start/end)]
// *     - date (date/time)
// *     - locationId (address)
// *  - returnRoute: Array of StopPoints [initially 2 (start/end)]
// *     - date (date/time)
// *     - locationId (address)
// *  - seatsRemaining (calculated: BusCapacity-tripBookings)
// *  - busCapacity
// *  - busCompany
// *  - confirmedBus
// *  - featuredTrip
// *  - tripStatus:
// *    - TextStatusDescription
// *  - offerings
// *    - Ticket Types
// *      - BusTickets: 99
// */
////Example entry:
////{
////  name: "Season Kickoff!",
////  departRoute: [{date: Date("2014-11-13T10:00:00Z"), location: sfId},{date: Date("2014-10-13T15:09:10Z"), location: kirkwoodId}],
////  returnRoute: [{date: Date("2014-11-15T10:00:00Z"), location: kirkwoodId},{date: Date("2014-10-15T15:09:10Z"), location: sfId}],
////  seatsRemaining: 12,
////  busCapacity: 55,
////  busCompany: 'Zippy Bus',
////  confirmedBus: true,
////  featuredTrip: true,
////  tripStatus: '',
////  offerings: [
////    {
////      type: 'Bus Ticket',
////      ticketCount: 55
////    },
////    {
////      type: 'Ski Ticket',
////      ticketCount: 9999
////    }
////  ]
////}
//
//
//Trips = new Meteor.Collection('trips');
//
///**
// * Bookings Collection:
// *   - bookingNumber
// *   - tripId
// *   - userId
// *   - bookingStatus (Interested, booked, )
// *   - orderDetails
// *    - Tickets Purchases[]
// *      - Type
// *      - Count
// *      - PersonalInfo []
// *        - (first, last, email*)
// *    - PaymentConfirmed
// *    - TransactionId/Confirmation#s
// *   - userNotes
// */
//Bookings = new Meteor.Collection('bookings');
//
///**
// * DestinationOffers Collection:
// *  DestinationOffers
// *   - DestinationLocation
// *   - Lodging:
// *     - Name, URL,
// *     - Resort 1: ??
// *     - Resort 2: ??
// *     - Resort 3: ??
// *   - Lift Tickets: ??
// *
// */
//DestinationOffers = new Meteor.Collection('destinationOffers');
//
////BTR - What is this Tacker.autorun function??
//Tracker.autorun(function () {
//  if (Meteor.isClient) {
//    Meteor.subscribe("trips");
//    Meteor.subscribe("bookings");
//    Meteor.subscribe("trip_bookings");
//    Meteor.subscribe("destinationOffers");
//  }
//});
//
//function _containsAny(sourceArray, checkForArray) {
//  for (var i = 0; i < checkForArray.length; i++) {
//    var checkStr = checkForArray[i];
//    if (_.contains(sourceArray, checkStr)) {
//      return true;
//    }
//  }
//  return false;
//}
//
//
//
//if (Meteor.isServer) {
//  /**
//   * publish trips... for now we will publish all trips to everyone who asks...
//   */
//  Meteor.publish('trips', function () {
//    return Trips.find();
//  });
//
//  /**
//   * Establish access control to organization resources
//   */
//    // Reasons to allow an operation (only one needs to be true to allow the operation)
//  Trips.allow({
//    insert: function (userId, doc) {
////      return (Meteor.user(userId).profile.role === 'admin')
//      return true;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//      return true;
//    },
//    remove: function (userId, doc) {
//      return true;
//    }
//  });
//  // Reasons to deny an operation (only one needs to be true to disallow the operation)
//  Trips.deny({
//    insert: function (userId, doc) {
//      return false;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//      return false;
//    },
//    remove: function (userId, doc) {
//      return false;
//    }
//  });
//
////  Meteor.publish('bookings', function () {
////    return Bookings.find({userId: Meteor.userId});
////  });
//  Meteor.publish('bookings', function() {
//    return Bookings.find({userId: this.userId});
//  });
//  Bookings.allow({
//    insert: function (userId, doc) {
//      //      return (Meteor.user(userId).profile.role === 'admin')
//      return true;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//      return true;
//    },
//    remove: function (userId, doc) {
//      return true;
//    }
//  });
//  // Reasons to deny an operation (only one needs to be true to disallow the operation)
//  Bookings.deny({
//    insert: function (userId, doc) {
//      //todo: eventually, only server side inserts.... probably special processing required
//      if (doc.userId != userId) {
//        return true;
//      }
//      return false;
//    },
//    update: function (userId, doc, fieldNames, modifier) {
//      //todo: look closer and what user is allowed to change... maybe just notes?
//      if (_containsAny(fieldNames, ['userId','bookingNumber','tripId'])) {
//        // no changes to these fields allowed
//        return true;
//      }
//      return false;
//    },
//    remove: function (userId, doc) {
//      //todo: eventually, only server side removes.... probably special processing required
//      if (doc.userId != userId) {
//        return true;
//      }
//      return false;
//    }
//  });
//
//  //Meteor.publish('trip_bookings', function(trip) {
//  //  var user = Meteor.users.findOne({_id: this.userId});
//  //  var criteria = (trip!=null) ? {tripId: trip._id} : {};
//  //  if (user && user.profile && user.profile.role=='admin') {
//  //    return Bookings.find(criteria);
//  //  }
//  //  return null;
//  //});
//  //
//
//
//
//  Meteor.publish('destinationOffers', function () {
//    return DestinationOffers.find();
//  });
//
//
//}
//
//
