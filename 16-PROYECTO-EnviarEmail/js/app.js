const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const enviar = document.getElementById("enviar");
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("enviar-mail").reset();
});

email.addEventListener("blur", validarEmail);

function validarEmail(e) {
  // const mensajeError = document.querySelector('#email + span');

  // if (email.value.indexOf('@') === -1) {
  //     mensajeError.innerHTML = 'Debe ingresar un email válido';
  //     mensajeError.classList.add('error');
  //     email.classList.add('error');
  // } else {
  //     mensajeError.innerHTML = '';
  //     mensajeError.classList.remove('error');
  //     email.classList.remove('error');
  // }

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email.value)) {
    //e.target.classList.add("error", "border-red-500", "bg-red-100");
    console.log("Email no válido");
  } else {
    // e.target.classList.remove('error', 'border-red-500', 'bg-red-100' );
    // e.target.classList.add('border-green-500', 'bg-green-100' );
    console.log("Email válido");
  }
}

asunto.addEventListener("blur", validarAsunto);
