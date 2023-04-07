function contagemRegressiva(numero) {
    // Exibir o número atual na página
    document.getElementById("contador").innerHTML = numero;

    let proximoNumero = numero - 1;

    if (proximoNumero >= 0) {
      // Esperar 1 segundo antes de chamar a próxima etapa da contagem regressiva
      setTimeout(function() {
        contagemRegressiva(proximoNumero);
      }, 500);
    }
  }

  function iniciarContagem() {
    let numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero)) {
      contagemRegressiva(numero);
    } else {
      alert("Por favor, insira um número válido!");
    }
  }