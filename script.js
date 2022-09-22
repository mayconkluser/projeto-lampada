const luzLampada = document.getElementById("lampada");
const btnOnOff = document.getElementById("btnOnOff");
const btnreconstrur = document.getElementById("btnreconstrur");
const backgroundBody = document.querySelector("body");

const luzLampadaQuebrada = () => {
  return luzLampada.src.indexOf("quebrada") > -1;
};

const luzLigar = () => {
  if (!luzLampadaQuebrada()) {
    btnOnOff.textContent = "Desligar";
    luzLampada.src = "./img/ligada.png";
    backgroundBody.classList.add("active");
  }
};

const luzDesligar = () => {
  if (!luzLampadaQuebrada()) {
    btnOnOff.textContent = "Ligar";
    luzLampada.src = "./img/desligada.png";
    backgroundBody.classList.remove("active");
  }
};

const destruirLampada = () => {
  luzLampada.src = "./img/quebrada.png";
  backgroundBody.classList.remove("active");
};

const reconstruirLampada = () => {
  if (luzLampadaQuebrada()) {
    btnOnOff.textContent = "Ligar";
    luzLampada.src = "./img/desligada.png";
  }
};

const luzOnOff = () => {
  if (!luzLampadaQuebrada()) {
    if (luzLampada.src.indexOf("desligada") > -1) {
      luzLigar();
    } else {
      luzDesligar();
    }
  }
};

luzDesligar();
btnOnOff.addEventListener("click", luzOnOff);
luzLampada.addEventListener("mouseover", luzLigar);
luzLampada.addEventListener("mouseout", luzDesligar);
btnreconstrur.addEventListener("click", reconstruirLampada);
luzLampada.addEventListener("dblclick", destruirLampada);
