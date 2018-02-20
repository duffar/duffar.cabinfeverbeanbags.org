Template.DonationListView.helpers({
  'donation': function() {
    return Donations.find();
  }
});

Template.DonationListView.events({
  'click #addDonationBtn' : function(e) {
    console.log('Add a new donation dialog');
    $('#DonationDetailInsertModal').modal('show');
    //e.preventDefault();
    //Session.set('donationEditMode',false);
  },
  'click #editDonationBtn' : function(e) {
    console.log('edit selected donation dialog');
    //e.preventDefault();
    //Session.set('donationEditMode',false);
  },
  'click #removeDonationBtn' : function(e) {
    console.log('remove selected donation dialog');
    //e.preventDefault();
    //Session.set('donationEditMode',false);
  }
});



AutoForm.hooks({
  insertDonationForm: {
    onSuccess: function(operation, result, template) {
      $('#DonationDetailInsertModal').modal('hide');
    }
  }
});






Template.DonationDetailEdit.events({
  'click #cancelDonationEdit' : function(e) {
    e.preventDefault();
    Session.set('donationEditMode',false);
  }
})



Template.UploadImages.helpers({
  'images': function() {
    return DBFiles.findOne({user:Meteor.userId()});
  }
});

//Template.UploadImages.images = function(){
//};

Template.UploadImages.events({
  'submit form': function(e, template) {
    e.preventDefault();
    var file = template.find('#fileinput').files[0];
    var meteoruser = Meteor.userId();
    var reader = new FileReader();
    reader.onload = function(e) {
      console.log('saving uploaded file');
      DBFiles.insert({src:e.target.result,user:meteoruser}, function(error, id) {
        console.log('finished saving image. error:'+error);
      });
    };
    console.log('reading uploaded file');
    reader.readAsDataURL(file);
  }
});

