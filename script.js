let dias = document.getElementById("dias");
let x = document.getElementById("x");

function calcular() {
  let n = dias.value * x.value;
  let respostaO = document.getElementById("respostaO");
  respostaO.style.display = "block";

  let p = document.getElementById("res");
  p.style.backgroundColor = "green";
  p.style.borderRadius = "10px";
  p.innerHTML = `Indo trabalhar de ônibus vc vai gastar R$${n} por semana`;
}

let motoDia = document.getElementById("mtDia");
let km = document.getElementById("km");
let consumo = document.getElementById("consumo");
let gasolina = document.getElementById("gasolina");

function calculoMoto() {
  let m = motoDia.value * (km.value * 2);
  let s = m / consumo.value;
  let q = s * gasolina.value;
  let respostaM = document.getElementById("respostaM");
  let r = document.getElementById("r");
  r.style.display = "block";
  respostaM.style.backgroundColor = "green";
  respostaM.style.borderRadius = "10px";
  respostaM.innerHTML = `você anda por semana ${m} KM e tem um gasto de <strong>R$ ${q}</strong>`;
}

let crDia = document.getElementById("crDia");
let crkm = document.getElementById("crkm");
let crconsumo = document.getElementById("crconsumo");
let crgasolina = document.getElementById("crgasolina");

let respostaC = document.getElementById("respostaC");
let rc = document.getElementById("rc");

function calculocarro() {
  let n = crDia.value * (crkm.value * 2);
  let sa = n / crconsumo.value;
  let qa = sa * crgasolina.value;
  rc.style.backgroundColor = "green";
  rc.style.borderRadius = "10px";
  rc.innerHTML = `você anda por semana ${n} KM e tem um gasto de <strong>R$ ${qa}</strong>`;
  respostaC.style.display = "block";
}
