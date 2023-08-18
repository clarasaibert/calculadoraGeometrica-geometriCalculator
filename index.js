function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo: "))
  const altura = parseFloat(prompt("Informe a altura do triângulo: "))
  return (base * altura)/2
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo: "))
  const altura = parseFloat(prompt("Informe a altura do retângulo: "))
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe o lado do quadrado:"))
  return lado * lado
}

function calcularAreaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const baseMenor = parseFloat(prompt("Infomer a base menor do trapézio:"))
  const altura = parseFloat(prompt("Informe a atlura do trapézio:"))
  return (baseMaior + baseMenor)* altura/2
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círuclo:"))
  return (raio * raio * 3.14 )
}

function exibirMenu() {
return prompt("Calculadora Geométrica\n" + 
    "\n1. Calcular área do triângulo" + 
    "\n2. Calcular área do retângulo" + 
    "\n3. Calcular área do quadrado" + 
    "\n4. Calcular área do trapézio" +
    "\n5. Calcular área do círculo" +
    "\n6. Sair "
  )}

function executar() {
  let opcao = ""
  do {
    opcao = exibirMenu()
    let resultado

  switch (opcao) {
    case "1":
      resultado = calcularAreaTriangulo()
    break
    case "2":
      resultado = calcularAreaRetangulo()
    break
    case "3":
      resultado = calcularAreaQuadrado()
    break
    case "4":
      resultado = calcularAreaTrapezio()
    break
    case "5":
      resultado = calcularAreaCirculo()
    break
    case "6": alert("Encerrando...")
      break
    default: alert("Entrada inválida")
      break
    }
    if (resultado) {
      alert("Resultado: " + resultado)
    }
} while(opcao !== "6")
}


executar()
