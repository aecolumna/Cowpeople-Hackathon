
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Parameter field cannot be left blank!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


var change_link_button = document.getElementById('change-link')

var updateLink = function () {
  var link_input = document.getElementById('link-box')
  var anchor_tag = document.getElementById('rfc-anchor')
  var new_link = link_input.value
  anchor_tag.href = new_link
}

change_link_button.addEventListener('click', updateLink)

var scripts = {
  first : "SELECT column1, column2 FROM table1, table2 WHERE column2=\'value\';",
  second : "CREATE OR REPLACE VIEW [ Product List] AS\n SELECT ProductID, ProductName, Category\nFROM Products\nWHERE Discontinued = No;",
  third : "CREATE TABLE rms12.BKUP_MIK_HEAD_RBN_WE0608_1\n AS SELECT  head.*\n, elog.rtlog_update_status\n \t\t , elog.rtlog_update_datetime\n, elog.reg_num\t"
}


var display_base_query = document.getElementById('display-base-query')


var updateTextArea = function () {
  var select_tag = document.getElementById('my-select')
  var text_area_tag = document.getElementById('textarea1')

  var select_val = select_tag.value

  if (select_val == 'first'){
    text_area_tag.value = scripts.first
  }
  else {
    text_area_tag.value = scripts.second
  }

}
display_base_query.addEventListener('click', updateTextArea)

