
/*
 * Catch a new User Creation...
 */
Accounts.onCreateUser(function (options, user) {
  console.log('create user: '+EJSON.stringify(user));
    //console.log('creating user:' + user.emails[0].toString());
  user.profile = options.profile || {};
  //if (user.profile == null) {
  //  user.profile = {};
  //}
  if ((user.emails != null) && (user.emails[0].address=='duffar@gmail.com')) {
    user.profile.role = 'admin'
  } else {
    user.profile.role = 'user'
  }
  console.log('create user after: '+EJSON.stringify(user));
  return user;
});



// sample server function that returns a json object
Meteor.startup(function() {
  console.log("Starting the Server...");

});


