var body = document.getElementsByTagName("body")[0];

var usRadioButton = document.getElementById("us");

var gbRadioButton = document.getElementById("gb");

var femaleCheckBox = document.getElementById("female");

var maleCheckBox = document.getElementById("male");

var choiceButton = document.getElementById("choice");


var createDate = function(newDate){

}




var ajaxGet = function(){
  var query = "http://api.randomuser.me/?"
  var mCheck = document.getElementById("male").checked
  var fCheck = document.getElementById("female").checked
  var uCheck = document.getElementById("us").checked
  var gCheck = document.getElementById("gb").checked
  if(mCheck != false){
    query = query + "gender=male&"
  }
  if(fCheck != false) {
    query = query +  "gender=female&"
  }
  if(mCheck != false && fCheck != false) {
    query = "http://api.randomuser.me/?"
  }
  if(uCheck != false) {
    query = query + "nat=us&"
  }
  else if(gCheck != false) {
    query = query + "nat=gb&"
  }
  var xhr = new XMLHttpRequest();
  xhr.open("GET", query);
  xhr.addEventListener("load", function(){
    var x = JSON.parse(xhr.response);
    var user_name = x.results[0].user.name.first;
    var address = x.results[0].user.location.street;
    var password = x.results[0].user.password;
    var phone_number = x.results[0].user.phone;
    var pic = x.results[0].user.picture.large;
  });
  var newDate = {user_name: user_name, address: address, password: password, phone_number: phone_number, pic: pic};
  // None of the above runs until xhr.send runs
  xhr.send(newDate);
}


choiceButton.addEventListener("click", ajaxGet);