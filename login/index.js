function validateForm() {
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar-senha").value;

    if (senha !== confirmarSenha) {
      document.getElementById("error-message").textContent = "A senha e a confirmação de senha estão diferentes.";
      return false;
    } else {
      document.getElementById("error-message").textContent = "";
      return true;
    }
  }