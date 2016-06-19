  import React from 'react';


  const LandingPage =  () =>
  (      <div className="page-container">
  <div className ="row section1">
  <div className="col-xs-12 col-md-12 section1 header">
   <div className="col-xs-0 col-md-1 header icon1">
   </div>
   <div className="col-xs-2 col-md-6">
      <img src="../../../../Homepage_arts/logo.png" className="img-responsive" alt="Our Logo" width="95" height="100" />
   </div>
   <div className="col-xs-10 col-md-5 tolling">
      <span className="pull-right">
         <div className = "col-xs-1 col-md-1 tolling icon2">
            <img  src="../../../../Homepage_arts/New_Mob.png" className="img-responsive" alt="toll image" width="42" height="40"/>
         </div>
         <div className = "col-xs-9 col-md-6 tolling toll">
            <div className = "col-xs-12 toll text1">
               Toll Number
            </div>
            <div className = "col-xs-12 toll text2">
               1800 123 456
            </div>
         </div>
      </span>
   </div>
</div>
<div className="col-xs-12 section textline">
   Holidays You Create!
</div>
<div className="col-xs-12 section1 form">
   <div className="spacer10"> </div>
   <div className="col-xs-0 col-md-2"> </div>
   <form className="form-inline" role="form">
      <div className="col-xs-0 col-md-8 section1 form input">
         <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Enter Name" />
         </div>
         <div className="form-group">
            <input type="email" className="form-control" id="name" placeholder="Email Id" />
         </div>
         <div className="form-group">
            <input type="phone" className="form-control" id="name" placeholder="Phone Number" />
         </div>
         <div className="form-group">
            <input type="" className="form-control" id="name" placeholder="Start date" />
         </div>
      </div>
      <div className="col-xs-0 col-md-2">
      </div>
      <div className="col-xs-12 section1btn">
         <button type="button button1" className="button button1">Enquire</button>
      </div>
   </form>
</div>
</div>
<div class="row no-gutter section2">
   <div class="col-xs-12 col-md-3 section2 textline">
      <div class="spacer20"> </div>
      <div class="col-xs-12 textline text1">
         Read What
      </div>
      <div class="col-xs-12 textline text2">
         travellers like
      </div>
      <div class="col-xs-12 textline text3">
         about
      </div>
   </div>
   <div class="col-xs-12 col-md-2 section2 country">
      <div class="spacer11"> </div>
      <span class="country text1">E</span><span class="country text">urope</span>
   </div>
   <div class="col-md-1 section2 division">
      <div class="spacer12"> </div>
      <img src="line.png" class="section2img">
   </div>
   <div class="col-md-4 section2 body">
      <div class="spacer30"> </div>
      <div class="col-xs-12 col-md-12 body content">
         With the wealth of attractions in Europe, from the renaissance art in Florence, to the canals of Venice, the splendor of Paris, and the historical canvas of London, there is simply no way to visit Europe and not be awestruck by the sheer beauty and the epic history that is offset with a simply amazing diversity.
      </div>
      <div class="col-xs-12 col-md-8 description modalbutton">
         <!-- Trigger the modal with a button -->
         <button type="button" class="btn btn-info btn-lg pull-right" data-toggle="modal" data-target="#myModal"> Expand</button>
         </span <!-- Modal -->
         <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
               <!-- Modal content-->
               <div class="modal-content">
                  <div class="modal-header">
                     <img src="close.png" class="close" data-dismiss="modal" />
                     <h4 class="modal-title">Europe</h4>
                  </div>
                  <div class="modal-body">
                     <p>
                        Europe is full of breathtaking scenery; the glens and lochs of the rugged Scottish Highlands, the fabulous fjords of Norway, Loire’s vine valleys, and the fairytale landscapes of Cappadocia, are just of the few attractions of this uniquely diverse destination. Europe is a place of vibrancy and life, where centuries’ old architecture coexists with the most modern galleries, nightclubs and restaurants; and once you have checked off the sights to visit, you can indulge yourself in the culinary adventure that is Europe. The diversity of the continent is the trump card that sets a Europe tour at unparalleled heights. The top attractions of Europe include:
                     <ul type="circle">
                        <li>A Turkish bath in Istanbul </li>
                        <li>Revel at the Oktoberfest in Germany</li>
                        <li>Play a little at the La Tomatina in Spain</li>
                        <li>Relish the French Rivera</li>
                        <li>Go boating at the Blue Grotto at Capri</li>
                        <li>Explore the Vatican Museums</li>
                        <li>Take the Warner Bros Harry Potter Studio Tour</li>
                        <li>Ride the London Eye</li>
                        <li>Climb the Eiffel Tower</li>
                        <li>See the art at the Louvre </li>
                     </ul>
                     There are very few places in the world that are untouched by the European influence, and because of that, you can expect a sense of connection whenever you visit.
                     </p>
                  </div>
                  <div class="col-lg-12 col-md-12 section2 form line">
                     Good To Go? Just Type In Your Details Below......
                  </div>
                  <div class="col-lg-12 col-md-12 section2 form input">
                     <form class="form-inline" role="form">
                        <div class="form-group">
                           <input type="text" class="form-control section2" id="name2" placeholder="Enter Name">
                        </div>
                        <div class="form-group">
                           <input type="phone" class="form-control section2" id="number2" placeholder="Phone Number">
                        </div>
                        <div class="form-group">
                           <input type="" class="form-control section2" id="date2" placeholder="Start date">
                        </div>
                  </div>
                  <button type="button button1" class="button button1">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<div className="row section3 add_border">
   <div className="spacer15"></div>
   <div className="col-xs-12 section3 header1 add_border">
      Huge variety of Holiday elements to choose from and complete transparency of cost at the click of a button.
   </div>
   <div className="col-xs-12 section3 header2 add_border">
      Check it out now and Create Your Holiday on ClayPlay!
   </div>
   <div className="col-md-12 section3 tags add_border">
      <div className="spacer15"></div>
      <div className="col-xs-12 col-md-2 tags cart add_border">
         <div className="col-xs-12 cart icon">
            <img src="../../../../Homepage_arts/Flight.png" className="img-icon" />
         </div>
         <div className="col-xs-12 cart head">
            Flights
         </div>
         <div className="col-xs-12 text1">
            <div className="spacer35"> </div>
            Wide options to select and compare from
         </div>
         <div className="col-xs-12 text2">
            <div className="spacer25"></div>
            Multiple flight timings and options to choose from
         </div>
         <div className="col-xs-12 text3">
            <div className="spacer25"></div>
            Discounted pricing across wide options
         </div>
      </div>
   </div>
   <div className="col-xs-12 col-md-2 tags cart">
      <div className="col-xs-12  cart icon">
         <img src="../../../../Homepage_arts/Transfers.png" className="img-icon" />
      </div>
      <div className="col-xs-12  cart head">
         Transfers
      </div>
      <div className="col-xs-12 text1">
         <div className="spacer35"> </div>
         Wide options to select and compare from
      </div>
      <div className="col-xs-12 text2">
         <div className="spacer25"></div>
         Multiple flight timings and options to choose from
      </div>
      <div className="col-xs-12 text3">
         <div className="spacer25"></div>
         Discounted pricing across wide options
      </div>
   </div>
   <div className="col-xs-12 col-md-2 tags cart">
      <div className="col-xs-12 cart icon">
         <img src="../../../../Homepage_arts/Hotel.png" className="img-icon" />
      </div>
      <div className="col-xs-12 col-md-12 cart head">
         Hotels
      </div>
      <div className="col-xs-12 text1">
         <div className="spacer35"> </div>
         Wide options to select and compare from
      </div>
      <div className="col-xs-12 text2">
         <div className="spacer25"></div>
         Multiple flight timings and options to choose from
      </div>
      <div className="col-xs-12 text3">
         <div className="spacer25"></div>
         Discounted pricing across wide options
      </div>
   </div>
   <div className="col-xs-12 col-md-2 tags cart">
      <div className="col-xs-12  cart icon">
         <img src="../../../../Homepage_arts/Sight_Seens.png" className="img-icon" />
      </div>
      <div className="col-xs-12 col-md-12 cart head">
         Activities
      </div>
      <div className="col-xs-12 text1">
         <div className="spacer35"> </div>
         Wide options to select and compare from
      </div>
      <div className="col-xs-12 text2">
         <div className="spacer25"></div>
         Multiple flight timings and options to choose from
      </div>
      <div className="col-xs-12 text3">
         <div className="spacer25"></div>
         Discounted pricing across wide options
      </div>
   </div>
   <div className="col-xs-12 col-md-2 tags cart">
      <div className="col-xs-12  cart icon">
         <img src="../../../../Homepage_arts/Sight_Seens.png" className="img-icon" />
      </div>
      <div className="col-xs-12 col-md-12 cart head">
         Other Services
      </div>
      <div className="col-xs-12 text1">
         <div className="spacer35"> </div>
         Wide options to select and compare from
      </div>
      <div className="col-xs-12 text2">
         <div className="spacer25"></div>
         Multiple flight timings and options to choose from
      </div>
      <div className="col-xs-12 text3">
         <div className="spacer25"></div>
         Discounted pricing across wide options
      </div>
   </div>
</div>
<div class="row section4">
   <div class="col-xs-12 section4 textline">
      Thinking of customised options? Do check out other close locations....
   </div>
   <div class="col-xs-0 col-md-12 imageline">
      <div class="spacer13"></div>
      <div class="col-xs-0 col-md-1"> </div>
      <div class="col-xs-12 col-md-3 image1">
         <a href="spain.html">
         <img src="../../../../Homepage_arts/spain.png" class="col-md-12 section4image" alt="toll image" width="286" height="264" />
         </a>
         <img src="../../../../Homepage_arts/duct tape.png" class="col-md-12 section4tape" />
         <div class="col-md-12 section4country"> Spain </div>
      </div>
      <div class="col-xs-12 col-md-3 image1">
         <a href="spain.html">
         <img src="../../../../Homepage_arts/spain.png" class="col-md-12 section4image" alt="toll image" width="286" height="264" />
         </a>
         <img src="../../../../Homepage_arts/duct tape.png" class="col-md-12 section4tape" />
         <div class="col-md-12 section4country"> Spain </div>
      </div>
      <div class="col-xs-12 col-md-3 image1">
         <a href="spain.html">
         <img src="../../../../Homepage_arts/spain.png" class="col-md-12 section4image" alt="toll image" width="286" height="264" />
         </a>
         <img src="../../../../Homepage_arts/duct tape.png" class="col-md-12 section4tape" />
         <div class="col-md-12 section4country"> Spain </div>
      </div>
   </div>
   <div class="col-xs-12 col-md-12 section4 lastline">
      <div class="spacer14"> </div>
      Copyright@2016 ClayPlay India.All Rights Reserved
   </div>
</div>
</div>

  
  );

  export default LandingPage;
