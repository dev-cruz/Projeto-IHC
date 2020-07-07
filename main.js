window.onload = () => {
  if (AFRAME.utils.device.isMobile() == false) {
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: mouse;fuse: false');
    } else {
        var el = document.getElementById("mycursor");
        el.setAttribute('cursor', 'rayOrigin: cursor;fuse: true');
        el.object3D.visible = true;
    }
}

const peca = document.querySelector("#peca1");

const setaEsquerda = document.querySelector("#setaEsquerda");
const setaDireita = document.querySelector("#setaDireita");

function girarEsquerda() {
  peca.object3D.rotation.y += 0.5;
}

function girarDireita() {
  peca.object3D.rotation.y -= 0.5;
}

setaEsquerda.onclick = girarEsquerda;
setaDireita.onclick = girarDireita;