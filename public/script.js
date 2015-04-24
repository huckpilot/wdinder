var body = document.getElementsByTagName("body")[0];

var ul = document.getElementsByTagName("ul")[0];

var usRadioButton = document.getElementById("us");

var gbRadioButton = document.getElementById("gb");

var femaleCheckBox = document.getElementById("female");

var maleCheckBox = document.getElementById("male");

var choiceButton = document.getElementById("choice");


var createDate = function(newDate){
    var x = JSON.parse(newDate).results[0].user;
    document.getElementsByTagName('img')[0].src = x.picture.large;
    var array = [x.name.first, x.location.street, x.password, x.phone]
    array.forEach(function(item){
      var li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
  };


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
    createDate(xhr.response);
  });
  // None of the above runs until xhr.send runs
  xhr.send();
}

var ajaxSave = function() {
  var url = "http://localhost:3000/date"
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  // xhr.addEventListener("load", function(){
  //   crea(xhr.response);
  // });
  var list = document.getElementsByTagName("li");
  var image = document.getElementsByTagName("img")[0].src;
  console.log(list);
  var newDate = {user_name: list[0].innerText, address: list[1].innerText, password: list[2].innerText, phone_number: list[2].innerText, pic: image};
  xhr.send(JSON.stringify(newDate));
}


choiceButton.addEventListener("click", ajaxGet);


dump.addEventListener("click", function(){
  var list = document.getElementsByTagName("li");
  var lLength = list.length;
  for(var i = 0;i<lLength; i++){
    list[0].remove();
  }
  var img = document.getElementsByTagName("img")[0];
    img.remove();
});

date.addEventListener("click", ajaxSave);






