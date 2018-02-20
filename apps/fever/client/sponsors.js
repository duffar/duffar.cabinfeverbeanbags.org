// load the content remotely
var usingflipwall = true;

$(document).ready(function () {
  // Request sponsor data as remote json object
  //requestSponsorData().done(function () {
  //  // populate the sponsorList div with returned data
  //  var spnLstData = getSponsorData();
  //  var $sponsorList = $('#sponsorList');
  //  for (var spnCatKey in spnLstData) {
  //    var spnCatData = spnLstData[spnCatKey];
  //    var $sponsorCat = $('<div/>', {'class': 'category', 'name': spnCatKey});
  //    $sponsorList.append($sponsorCat);
  //    for (var spnKey in spnCatData) {
  //      var spnData = spnCatData[spnKey];
  //      var $sponsor = $('<div/>', {'class': 'sponsor'});
  //      $sponsorCat.append($sponsor);
  //      for (var spnAttKey in spnData) {
  //        $sponsor.attr(spnAttKey, spnData[spnAttKey]);
  //      }
  //    }
  //  }
  //  // Define the sponsor category headings
  //  $('.category').each(function (index) {
  //    var $c = $(this);
  //    var $name = $c.attr('name');
  //    $c.prepend('<h2>' + $name + '</h2>');
  //  });
  //  // randomize the sponsors at each level
  //  $('#sponsorList .category').each(function (index) {
  //    $(this).randomize('.sponsor');
  //  });
  //  // now render them on the page
  //  if (usingflipwall) {
  //    // construct flipwall
  //    $('.sponsor').each(function (index) {
  //      var $s = $(this);
  //      var $name = $s.attr('name');
  //      var $url = $s.attr('url');
  //      var $img = $s.attr('img');
  //      if (!$img) {
  //        $img = dataHome + '/img/sponsors/' + $name + '.png';
  //      } else if (!$img.toLowerCase().startsWith("http")) {
  //        $img = dataHome + '/img/sponsors/' + $img;
  //      }
  //      $s.attr('title', 'Click to flip');
  //      $s.append('<div class="sponsorFlip"><img src="' + $img + '"/></div>');
  //      $s.append('<div class="sponsorData">' +
  //      '<div class="sponsorDescription">' + $name + '</div>' +
  //      '<div class="sponsorURL"><a href="' + $url + '" target="_blank">' + $url + '</a></div>' +
  //      '</div>');
  //    });
  //  } else {
  //    // create using old fashion list
  //    $('.sponsor').each(function (index) {
  //      var $s = $(this);
  //      var $name = $s.attr('name');
  //      var $url = $s.attr('url');
  //      var $img = $s.attr('img');
  //      if (!$img) {
  //        $img = dataHome + '/img/sponsors/' + $name + '.png';
  //      } else if (!$img.toLowerCase().startsWith("http")) {
  //        $img = dataHome + '/img/sponsors/' + $img;
  //      }
  //      $s.append('<br><br><div class="sponsorFlip">' +
  //      '<a href="' + $url + '" target="_blank">' +
  //      '<img src="' + $img + '"/>' +
  //      '</a>' +
  //      '</div>');
  //    });
  //  }
  //});

  $(document).on('click', '.sponsorFlip', function () {
    // $(this) point to the clicked .sponsorFlip element (caching it in elem for speed):
    var elem = $(this);
    // data('flipped') is a flag we set when we flip the element:
    if (elem.data('flipped')) {
      // If the element has already been flipped, use the revertFlip method
      // defined by the plug-in to revert to the default state automatically:
      elem.revertFlip();
      // Unsetting the flag:
      elem.data('flipped', false)
    }
    else {
      // Using the flip method defined by the plugin:
      elem.flip({
        direction: 'lr',
        speed: 350,
        onBefore: function () {
          // Insert the contents of the .sponsorData div (hidden
          // from view with display:none) into the clicked
          // .sponsorFlip div before the flipping animation starts:
          elem.html(elem.siblings('.sponsorData').html());
        }
      });
      // Setting the flag:
      elem.data('flipped', true);
    }
  });

});
