var body = document.getElementsByTagName("body")[0];

var ul = document.getElementsByTagName("ul")[0];

var usRadioButton = document.getElementById("us");

var gbRadioButton = document.getElementById("gb");

var femaleCheckBox = document.getElementById("female");

var maleCheckBox = document.getElementById("male");

var choiceButton = document.getElementById("choice");


var createDate = function(newDate){
    var x = JSON.parse(newDate).results[0].user;
    var array = [x.name.first, x.location.street, x.password, x.phone]
    array.forEach(function(item){
      var li = document.createElement("li");
      li.innerText = item;
      ul.appendChild(li);
    });
    var button = document.createElement('button');
    button.innerText = "Dump";
    button.setAttribute("id", "dump");
    body.appendChild(button);
    var dump = document.getElementById('dump');

    var button = document.createElement('button');
    button.innerText = "Date";
    button.setAttribute("id", "date");
    body.appendChild(button);
    var date = document.getElementById('date');

    var br = document.createElement("br");
    body.appendChild(br);
    
    var image = document.createElement("img");
    image.setAttribute("img", src="");
    image.src = x.picture.large;
    body.appendChild(image);

    dump.addEventListener("click", dumpDate);
    date.addEventListener("click", saveDate);
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

function saveDate() {
  var url = "http://localhost:3000/date"
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.addEventListener("load", function(){
    createDate(xhr.response);
  });
  var list = document.getElementsByTagName("li");
  var image = document.getElementsByTagName("img")[0].src;
  //console.log(list);
  var newDate = {user_name: list[0].innerText, address: list[1].innerText, password: list[2].innerText, phone_number: list[3].innerText, pic: image};
  xhr.send(JSON.stringify(newDate));
  var list = document.getElementsByTagName("li");
  var lLength = list.length;
  for(var i = 0;i<lLength; i++){
    list[0].remove();
  }
  var img = document.getElementsByTagName("img")[0];
    img.remove();
  var dump = document.getElementById("dump");
    dump.remove();
  var date = document.getElementById("date");
    date.remove();    
  ajaxGet();
}


choiceButton.addEventListener("click", ajaxGet);


function dumpDate() {
  var list = document.getElementsByTagName("li");
  var lLength = list.length;
  for(var i = 0;i<lLength; i++){
    list[0].remove();
  }
  var img = document.getElementsByTagName("img")[0];
    img.remove();
  var dump = document.getElementById("dump");
    dump.remove();
  var date = document.getElementById("date");
    date.remove();  
    ajaxGet();
};








