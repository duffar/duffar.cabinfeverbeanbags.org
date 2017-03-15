<style type="text/css">

#marqueecontainer{
    position: relative;
    width: 250px; /*marquee width */
    height: 300px; /*marquee height */
    background-color: white;
    overflow: hidden;
    border: 1px black;
    padding: 2px;
    padding-left: 4px;
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

var delayb4scroll=1000 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
var marqueespeed=2 //Specify marquee scroll speed (larger is faster 1-10)
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

// Load content remotely and insert into page - then reinitialize marquee
$(document).ready(function(){
     initializemarquee();
});


</script>



<div id="marqueecontainer" onmouseover="copyspeed=pausespeed" onmouseout="copyspeed=marqueespeed">
<div id="vmarquee" style="position: absolute; width:100%; text-align: center;  background-color:white">

<!--YOUR SCROLL CONTENT HERE-->

<!-- Premier Sponsors -->

<a href="http://www.babcockautocare.com/" target="_blank"><img border="1"  width="250" xheight="100" src="http://2.bp.blogspot.com/-j_BdrlGSxqc/UIV3uwoDnrI/AAAAAAAAI50/3LbXAtJjEyk/s320/Babcock+FINAL+LOGO-2011.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="" target="_blank"><img border="0"  xwidth="250" height="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-obNTW8p5_aw/UJvBB92bDLI/AAAAAAAAI7Q/L79ouYxcXAc/s320/casual%2Bbanner%2Blayout.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.allclimateselfstorage.com/" target="_blank"><img border="0"  xwidth="250" height="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-fTcgfa7WrbA/UJgUWQGNnZI/AAAAAAAAI6s/Vvq6RQmcun8/s320/All%2BClimate%2BSlf.%2BStorage%2BLogo.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.jagtours.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-gS_gD3ZjITw/UJvBCTRB-iI/AAAAAAAAI7c/-xueVc_Vqeg/s320/jag.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.ellingsoncompanies.com/" target="_blank"><img border="0"  width="250" xheight="100" src="http://1.bp.blogspot.com/-_3B_QZshQcE/UJgTag2kx3I/AAAAAAAAI6g/aMtA0Sy-eOA/s320/ellingson%2Blogo%2Bfinal.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.rochestereventcenter.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-tjKWwZpzRHk/UNc96a86jJI/AAAAAAAAJBE/D7wnhyudFUg/s320/Rochester-International-Event-Center-logo.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.creativehf.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-zWsjvf5r_rE/UNdf5aXsLUI/AAAAAAAAJBY/poF_s8antzs/s320/CreativeHardoodFloors.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.custom-alarm.com/" target="_blank"><img border="0"  xwidth="250" height="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-XcI2iQsT--4/UKW4gKpfaqI/AAAAAAAAI70/ak3kAcqm4H8/s320/CustomAlarm.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.midwestsigntech.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-DQhZf_hFxS0/UL6tJ5dV7eI/AAAAAAAAI_A/MPC4rUoblxM/s1600/MWST%2Blogo.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.mikemeyersigns.com/Main.html" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-ON-vOU-CiDg/UPl9uHUI-bI/AAAAAAAAJFA/8kNNLVX4OSU/s320/MIKE%2BMEYERLOGO.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://acemw.com" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-QdSS1DlvsUo/UOMsJASC_OI/AAAAAAAAJB0/E5kqFwbP6cY/s1600/AceMidwest.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.northgatechiropractic.com" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-9Myq59xMZPM/Um_FCpXsFwI/AAAAAAAAL6I/FMKrrBwGqsU/s320/2008+NGCC+LOGO.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.wpsantennas.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-MtJTyYxFUsw/UKuVo_wA-lI/AAAAAAAAI8I/wR7QBCb71SM/s320/wpsantennas-sm.gif.gif"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.allsysinst.com" target="_blank"><img border="0"  width="250" height="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-Y-CE9jCZeog/UnaKG_TwP7I/AAAAAAAAL6c/oWelvXte5IU/s320/AllSystems.gif"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.cabinfeverbeanbags.org/p/sponsors.html" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://2.bp.blogspot.com/-QhZrYGTGny0/Unhaoyh2uRI/AAAAAAAAL7U/GUSaqgD8y7E/s320/Put-Your-Logo-Here.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.premierbuildersmn.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-vH2a-wM42fE/UnkAD_5jRTI/AAAAAAAAL7k/ArejnYN4Ei4/s320/PremierBuilders.png"/>
<font color="black" size="4"><br/><hr/><br/></font>

<a href="http://www.farmersagent.com/jfasbender" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-RBT-ZnNYdG4/UPTAkors74I/AAAAAAAAJEI/PvGUz_pXXKQ/s1600/fasbender_farmers.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>

<a href="http://www.midwest-dental.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-c14a6o9pKQA/UQcbT4uSR4I/AAAAAAAAJHQ/ntTV4DuGSqY/s320/Midwest_Dental_logo.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.bacbunleashed.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://2.bp.blogspot.com/-Z_Ry5nGuVyI/UoI0qbcaPwI/AAAAAAAAL84/x4Fu9rhOtc0/s320/BACB+banner.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.reichelfoods.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-CAykfYP6qXU/UK16fanuFnI/AAAAAAAAI9M/mS8hJjm1miw/s320/ReichelSmall.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>



<!--
<a href="http://www.townsquaremedia.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-YZMlEw5wt2s/UnkEWmpmDKI/AAAAAAAAL7w/XGmP6ykcYVs/s320/townsquaremedia.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
-->









<!-- Last years sponsors


<a href="http://rochester.cumulusradio.com/Home/tabid/37/Default.aspx" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-HlhrPDRZWHA/ULl5E292yXI/AAAAAAAAI-s/6-edf8i1NZY/s320/Cumulus.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


<a href="http://semaequip.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/--_gdDUK81Lc/UNc9ycX6oFI/AAAAAAAAJA4/IUZNQOxlZT4/s320/SEMA.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


<a href="" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-r-cMeXIFrm8/UPB-3wX7uRI/AAAAAAAAJC0/ePmPtAR9_yc/s320/ihrkejpg.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.samsclub.com" target="_blank"><img border="0"  xwidth="250" height="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-_alqh3m3ykU/UPIAtqDFNWI/AAAAAAAAJD0/bzqFLxKVFpA/s320/samsclubnewlogo.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.panerabread.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://2.bp.blogspot.com/-Rxi2KVrX3oo/UPl9Xdp9ibI/AAAAAAAAJE0/nYb2HpamIL4/s320/Panera.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.cws.net/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://3.bp.blogspot.com/-Kyh_3XxPLVM/UQRR7I2QKMI/AAAAAAAAJFo/6VftYhZW-Nk/s320/cws-logo-RGB.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://leasemyfarmland.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-Rnehjm5DyEc/UQvljOw_9XI/AAAAAAAAJHo/FC_jxSuwlRw/s320/Saratoga_Partnership_Web_Logo.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://gamefeller.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://2.bp.blogspot.com/-CU3OhJvrDYM/URaNetb3nmI/AAAAAAAAJIg/zZAmTfDlfSY/s320/GF_Color_Logo.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


<a href="http://www.cyclecityrochester.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-OX7qb2wH86o/UR6mIf_wNHI/AAAAAAAAJJU/oYFrtkvQrJI/s320/cyclecityfender.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-MDB_eb3L9qU/UR6mSMwp3UI/AAAAAAAAJJk/_pT4EoAQXVI/s320/CYCLONE+COUNTRY+landscape.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

<a href="http://www.thirdcoastanalytics.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-am5uTY1O5xQ/UR6mQjxp0tI/AAAAAAAAJJc/t1_NCU5fFSM/s320/ThirdCoastAnalytics.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>

-->




<!-- Regular Sponsors 




<a href="http://www.kbscompanies.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://1.bp.blogspot.com/-YsXaxJ5Eo2g/UKuW7ZRewGI/AAAAAAAAI8U/pYwnF7DQuaw/s320/kbs.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


<a href="http://theurbanstudio.com/" target="_blank"><img border="0"  width="250" xheight="100" -o-object-fit="contain;"  src="http://2.bp.blogspot.com/-p7gEJjRu3tM/ULQW1w4Iv5I/AAAAAAAAI-M/cGRDoyY-ISA/s320/TheUrbanStudio.png"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


<a href="http://rochestertoyota.calls.net/?utm_source=k1854&utm_medium=cpc&utm_term=rochester+toyota+rochester+minnesota&utm_content=p292544913&utm_campaign=PaidSearch&siteid=SEM_GNY10_Google_paidsearch" target="_blank"><img border="0"  xwidth="250" height="120" -o-object-fit="contain;"  src="http://4.bp.blogspot.com/-l0b_EdOb2Ts/ULQXKdJId9I/AAAAAAAAI-Y/ckvPT1Ma1io/s320/rochester-toyota-logo-4791.jpg"/>
<font color="black" size="4"><br/><hr/><br/></font>
</a>


-->


<!--YOUR SCROLL CONTENT HERE-->

</div>
</div>