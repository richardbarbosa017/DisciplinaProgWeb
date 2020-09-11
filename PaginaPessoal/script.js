var listaHob = document.getElementById("hobbies");
var listaDuv = document.getElementById("duvidas");

var ulObjH = document.createElement("ul");
var ulObj = document.createElement("ul");

function criaHobbie(){
    var txt = document.getElementById("btnHob").value;
    var liObjh = document.createElement("li");
    liObjh.textContent = txt;
    ulObjH.appendChild(liObjh);
    listaHob.appendChild(ulObjH);
}
function criaDuvida(){
    var txt = document.getElementById("btnDuv").value;
    var liObj = document.createElement("li");
    liObj.textContent = txt;
    ulObj.appendChild(liObj);
    listaDuv.appendChild(ulObj);
}

