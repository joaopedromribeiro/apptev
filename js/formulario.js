document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    
    
    // Exibe um alerta de sucesso
    alert("Sua sugestão foi enviada com sucesso!");
    
    // Limpa os campos do formulário, se necessário
    document.getElementById("form").reset();
  });