<style type="text/css">

#marqueecontainer{
    position: relative;
    width: 250px; /*marquee width */
    height: 300px; /*marquee height */
    background-color: white;
    overflow: hidden;
    border: 1px black;
    text-align: left;
}

#vmarquee img {
    width:90%;
    height: 90%;
    max-width:90%;
    max-height:90%;
    outline:#000000 black;
    xborder: 1px black;
    margin:2%;
    xmargin-bottom:5px;
    border-radius:5px;
}

#vmarquee .sponsorData {
    border: 1px black;
    margin-bottom:5px;
    border-radius:5px;
    padding-bottom:5px;
}

</style>


<script type="text/javascript">

/***********************************************
* Cross browser Marquee II- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/

var delayb4scroll=5000 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed=1 //Specify marquee scroll speed (larger is faster 1-10)
var pauseit=1 //Pause marquee onMousever (0=no. 1=yes)?

////NO NEED TO EDIT BELOW THIS LINE////////////

var copyspeed=marqueespeed
var pausespeed=(pauseit==0)? copyspeed: 0
var actualheight=''

function scrollmarquee(){
    if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8))
        cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px"
    else
        cross_marquee.style.top=parseInt(marqueeheight)+8+"px"
}

function shufflemarquee() {
    var parent = document.getElementById("vmarquee");
    var divs = parent.children;
    var frag = document.createDocumentFragment();
    while (divs.length) {
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    parent.appendChild(frag);
}

function initializemarquee(){
    //shufflemarquee()
    cross_marquee=document.getElementById("vmarquee")
    cross_marquee.style.top=0
    marqueeheight=document.getElementById("marqueecontainer").offsetHeight
    actualheight=cross_marquee.offsetHeight
    if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
        cross_marquee.style.height=marqueeheight+"px"
        cross_marquee.style.overflow="scroll"
        return
    }
    setTimeout('lefttime=setInterval("scrollmarquee()",30)', delayb4scroll)
}

$(document).ready(function(){
     loadContent();
});

function loadContent(){
    // Load content remotely and insert into page - then reinitialize marquee
    // Request sponsor data as remote json object
    requestSponsorData().done(function(){
      // populate the sponsorList div with returned data
      var spnLstData = getSponsorData();
      var $sponsorList = $('#vmarquee');
      for (var spnCatKey in spnLstData) {
        var spnCatData = spnLstData[spnCatKey];
        var $sponsorCat = $('<div/>', {'class': 'category', 'name': spnCatKey});
        $sponsorList.append($sponsorCat);
        for (var spnKey in spnCatData) {
          var spnData = spnCatData[spnKey];
          var $sponsor = $('<div/>', {'class': 'sponsor'});
          $sponsorCat.append($sponsor);
          for (var spnAttKey in spnData) {
            $sponsor.attr(spnAttKey, spnData[spnAttKey]);
          }
        }
      }
        // randomize the sponsors at each level
        $('#vmarquee .category').each(function(index){
            $(this).randomize('.sponsor');
        });
        // render the gold sponsors
        $('.category[name=gold] .sponsor').each(function(index){
            var $s = $(this);
            var $name = $s.attr('name');
            var $url = $s.attr('url');
            var $img = $s.attr('img');
            if (!$img) {
                $img = dataHome+'/img/sponsors/'+$name+'.png';
            } else if (!$img.toLowerCase().startsWith("http")) {
                $img = dataHome+'/img/sponsors/'+$img;
            }
            $s.append('<div class="sponsorData">'+
                        '<div class="sponsorURL"><a href="'+$url+'" target="_blank"><img src="'+$img+'"/><hr/></a></div>'+
                      '</div>');
        });
        // when all the images are loaded, then init the marquee
        var goldcount = $('.category[name=gold] .sponsor').length;
        var loadcount = 0;
        $('.category[name=gold] .sponsor img').load(function(){
            loadcount += 1;
            if (loadcount === goldcount) {
                initializemarquee();
            }
        });
    });
};

</script>


<div id="marqueecontainer" onmouseover="copyspeed=pausespeed" onmouseout="copyspeed=marqueespeed">
    <div id="vmarquee" style="position: absolute; width:100%; text-align: center;  background-color:white">
        <!--YOUR SCROLL CONTENT HERE-->
    </div>
</div>