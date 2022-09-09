function Converter() {
  var valor = parseFloat(document.getElementById("valor").value);


  var valorMetroSegundo = valor * 0.277
  var valorMilhaHora = valor * 0.6213
  var valorPorcentagemLuz = (valor * 100) / 1079252849
  

  var metroSegundo = document.getElementById("valorConvertidoMetroSegundo");
  var resultadoMetroSegundo = "O resultado em Metros por Segundos (m/s) é " + valorMetroSegundo.toFixed(1)
  metroSegundo.innerHTML = resultadoMetroSegundo;

  var milhaHora = document.getElementById("valorConvertidoMilhaHora")
  var resultadoMilhaHora = "O resultado em Milhas por hora (Mph) é " + valorMilhaHora.toFixed(1)
  milhaHora.innerHTML = resultadoMilhaHora

  var porcentagemLuz = document.getElementById("valorConvertidoPorcentagemLuz")
  var resultadoPorcentagemLuz = "Essa velocidade é equivalente a " + valorPorcentagemLuz.toFixed(5) + "%"
  porcentagemLuz.innerHTML = resultadoPorcentagemLuz
}