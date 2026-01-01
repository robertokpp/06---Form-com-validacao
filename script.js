const form = document.querySelector("form");
const formName = form.querySelector("#name");
const email = form.querySelector("#email");
const subject = form.querySelector("#subject");
const message = form.querySelector("#message");

function validacion(params, params2) {
  const element = params.querySelector("span");
  if (element) {
    return;
  } else {
    const span = document.createElement("span");
    const label = params.querySelector("label");
    span.classList = "alert";
    if (params2 === undefined) {
      span.textContent = `Ops! O ${label.textContent} ficou em branco.`;
    } else {
      span.textContent = `Ops! O E-mail é invalido `;
    }
    params.append(span);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let i = 0;
  if (formName.value.trim() === "") {
    const div = formName.parentElement;
    validacion(div);
  } else {
    i++;
  }
  if (email.value.trim() === "") {
    const div = email.parentElement;
    validacion(div);
  } else if (!email.value.includes(".com")) {
    const div = email.parentElement;
    validacion(div, "invalido");
  } else {
    i++;
  }
  if (subject.value.trim() === "") {
    const div = subject.parentElement;
    validacion(div);
  } else {
    i++;
  }
  if (message.value.trim() === "") {
    const div = message.parentElement;
    validacion(div);
  } else {
    i++;
  }

  
  if (i === 4) {
    formName.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
    const clearAlert = form.querySelectorAll(".alert");
    clearAlert.forEach(element => {
      element.remove()
    }); 
  }
});
