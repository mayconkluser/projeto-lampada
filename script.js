const lamapada = document.getElementById("lampada");
const ligado = document.getElementById("ligado");
const reconstruida = document.getElementById("reconstruida");
const body = document.querySelector("body");

const lamapadaQuebrada = () => {
  return lamapada.src.indexOf("quebrada") > -1;
};

const ligar = () => {
  if (!lamapadaQuebrada()) {
    lamapada.classList.remove("activeOff");
    lamapada.classList.add("activeOn");
    body.classList.add("active");
    lamapada.src = "./img/ligada.png";
    ligado.innerText = "Desligar";
    return true;
  }
};

const desligar = () => {
  if (!lamapadaQuebrada()) {
    lamapada.classList.remove("activeOn");
    lamapada.classList.add("activeOff");
    body.classList.remove("active");
    lamapada.src = "./img/desligada.png";
    ligado.innerText = "Ligar";
  }
};

const quebrar = () => {
  lamapada.classList.add("activeOff");
  lamapada.src = "./img/quebrada.png";
  body.classList.remove("active");
};

const reconstruir = () => {
  if (lamapadaQuebrada()) {
    lamapada.src = "./img/desligada.png";
    ligado.innerText = "Ligar";
    desligar();
  }
};

const ligarDesligar = () => {
  if (!lamapadaQuebrada()) {
    if (lamapada.src.indexOf("desligada") > -1) {
      ligar();
    } else if (lamapada.src.indexOf("ligada") - 1) {
      desligar();
    }
  }
};
desligar();
ligado.addEventListener("click", ligarDesligar);
reconstruida.addEventListener("click", reconstruir);
lamapada.addEventListener("dblclick", quebrar);
lamapada.addEventListener("mouseover", ligar);
lamapada.addEventListener("mouseout", desligar);
