const turnOn = document.getElementById("turnOn"),
  turnOff = document.getElementById("turnOff"),
  lamp = document.getElementById("lamp"),
  active = "active";

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}
function lampOn() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
    turnOn.innerText = "Desligar";
    turnOn.classList.add(active);
  }
}
function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
    turnOn.innerText = "Ligar";
    turnOn.classList.remove(active);
  }
}

function lampbroken() {
  lamp.src = "./img/quebrada.jpg";
  turnOn.classList.remove(active);
}

function lampOnLampOff() {
  turnOn.classList.toggle(active);
  if (turnOn.className === "active") {
    if (!isLampBroken()) {
      lamp.src = "./img/ligada.jpg";
      turnOn.innerText = "Desligar";
    }
  } else if (turnOn.className === "") {
    if (!isLampBroken()) {
      lamp.src = "./img/desligada.jpg";
      turnOn.innerText = "Ligar";
      turnOn.classList.remove(active);
    }
  }
}
function reconstruct() {
  lamp.src = "./img/desligada.jpg";
  turnOn.innerText = "Ligar";
}

turnOn.addEventListener("click", lampOnLampOff);
turnOff.addEventListener("click", reconstruct);

lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampbroken);
