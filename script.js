document.getElementById("sorteioForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const minimo = parseInt(document.getElementById("minimo").value);
    const maximo = parseInt(document.getElementById("maximo").value);
    const nomeSorteio = document.getElementById("nomeSorteio").value;
  
    if (minimo >= maximo) {
      alert("O valor mínimo deve ser menor que o máximo.");
      return;
    }
  
    const numerosSorteados = [];
    for (let i = 0; i < quantidade; i++) {
      const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
      numerosSorteados.push(numero);
    }
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
      ${nomeSorteio ? `<h2>${nomeSorteio}</h2>` : ""}
      <p>Números sorteados: <strong>${numerosSorteados.join(", ")}</strong></p>
    `;
  });

document.getElementById("limparBtn").addEventListener("click", function () {
    document.getElementById("sorteioForm").reset();
    document.getElementById("resultado").innerHTML = ""; // Limpa o resultado
  });
  
  