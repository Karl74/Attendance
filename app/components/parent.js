var React = require("react");

var Results = require("./Results");
var Saved = require("./Saved");
var Search = require("./Search");
var helpers = require("./utilities/helpers.js");

class Parent extends React.Component{

render() {

return (
    //========== Hey Kathryn Look!!!!!!!   your code goes here :)

    <body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
      <nav className="navbar navbar-fixed-top">
        <!-- <div className="container-fluid"> -->
        <div>

        </div>
        <a class="navbar-brand" href="#myPage">Login</a>
            </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#myPage">HOME</a></li>
              <li><a href="#band">BAND</a></li>
              <li><a href="#tour">TOUR</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">MORE
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Merchandise</a></li>
                  <li><a href="#">Extras</a></li>
                  <li><a href="#">Media</a></li>
                </ul>
              </li>
              <li><a href="#"><span class="glyphicon glyphicon-search"></span></a></li>
            </ul>
          </div>
        </div>
      </nav>

    <div className = "row">
      <div className = "row-black">
        <div className="col-lg-12"></div>
      </div>
    </div>

    <div className = "row">
        <div className="col-lg-12"></div>
    <img src="image/stackOfBooks.jpg" width="1440" height="800"></src>
    </div>







);

} //end of render function

} // end of react class
