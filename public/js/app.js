
function timeOfDay() {
  var currentTime = new Date().getHours();
  if (currentTime < 12) {
    return "Good Morning";
  } else if (currentTime < 18) {
    return "Good Noon";
  } else {
    return "Good Night";
  }
}

const userName=document.getElementById("dynamic").textContent












let i = 0;
let text = `....${timeOfDay()}, ${userName}....Have a look at your Mails`;
let speed = 200; // milliseconds per character

function typeWriter() {
    document.getElementById("greet").innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      setTimeout(function(){
        i = 0;
        document.getElementById("greet").innerHTML = "";
      }, 1000);
    }
}

setInterval(typeWriter, speed);


//make typewritter function run on page load
window.onload = typeWriter;