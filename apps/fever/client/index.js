Router.configure({
  layoutTemplate: 'ApplicationLayout',
  yieldTemplates: {
    'myFooter': {to: 'footer'}
  }
});


Router.map(function () {
  this.route('Home', {
    path: '/'
  });
  this.route('MyTeam', {
    path: '/myteam'
  });
  this.route('DayOf', {
    path: '/dayof'
  });
  this.route('Fighters', {
    path: '/fighters'
  });
  this.route('Auction', {
    path: '/auction'
  });
  this.route('Ticket', {
    path: '/ticket'
  });
  this.route('Sponsors', {
    path: '/sponsors'
  });
  this.route('SignUp', {
    path: '/signup'
  });
  this.route('Rules', {
    path: '/rules'
  });
  this.route('About', {
    path: '/about'
  });
  this.route('Links', {
    path: '/links'
  });
  this.route('Staff', {
    path: '/staff'
  });
  this.route('Admin', {
    path: '/admin'
  });
});

// This function logs a message every time the user logs in/out
//Tracker.autorun(function() {
//  console.log('logged in user is: '+Meteor.user());
//});

Tracker.autorun(function () {
  var user = Meteor.user();
  if (user == null) {
    console.log('going home');
    //    Router.go('Home');  BROKEN FOR SOME REASON. When fails it also breaks reactivity of this function so nothing works
  } else {
    if (user.profile.userInfo == null) {
      console.log('going to get user info');
      //      Router.go('MyTeam');
    }
  }
});


Template.registerHelper('isStaff', function() {
  return true;
});

Template.registerHelper('isAdmin', function() {
  return true;
});

