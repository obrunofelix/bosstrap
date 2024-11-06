const email = "nicolasvianapagamentos@gmail.com";
const senha = "jabiraca";
localStorage.setItem(email, senha);

const emailinput = document.getElementById("email");
const senhainput = document.getElementById("senha");
const formulario = document.getElementById("formulario_login");
formulario.addEventListener("submit", (event) => {

  event.preventDefault();
  const emaildigitado = emailinput.value;
  const senhadigitada = senhainput.value;
  
  console.log(emaildigitado);
  console.log(senhadigitada);
  
});
