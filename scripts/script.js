// function setTheme(theme) {
//     document.body.className = theme;
//     document.getElementById('current-mode').textContent = theme.CharAt(0).toUpperCase()+theme.slice(1);
// }

// //set initial theme on load
// window.onload=function(){
//     setTheme('default');
// };

function setDark() {
  document.getElementById("current_m").innerHTML = "Current Settings: Dark";
  document.getElementById("body_webpage").style.backgroundColor = "black";
  document.getElementById("paragraph_description").style.color = "white";
  document.getElementById("current_m").style.color = "#e0e4c1";
  document.getElementById("title").style.color = "white";
  document.getElementById("modes").style.color = "white";
  document.getElementById("demotitle").style.color = "white";
  document.getElementById("pass").style.color = "white";
  document.getElementById("last").style.color = "white";
}
      
function setLight() {
  document.getElementById("current_m").innerHTML = "Current Settings: Light";
  document.getElementById("current_m").style.color = "#000000";
  document.getElementById("body_webpage").style.backgroundColor = "#ffffff";
  document.getElementById("paragraph_description").style.color = "#000000";
  document.getElementById("title").style.color = "black";
  document.getElementById("modes").style.color = "black";
  document.getElementById("demotitle").style.color = "black";
  document.getElementById("pass").style.color = "black";
  document.getElementById("last").style.color = "black";
}
  
function setDefault() {
  document.getElementById("current_m").innerHTML = "Current Settings: Default";
  document.getElementById("current_m").style.color = "#000000";
  document.getElementById("body_webpage").style.backgroundColor = "white";
  document.getElementById("paragraph_description").style.color = "#000000";
  document.getElementById("title").style.color = "black";
  document.getElementById("modes").style.color = "black";
  document.getElementById("demotitle").style.color = "black";
  document.getElementById("pass").style.color = "black";
  document.getElementById("last").style.color = "black";
}