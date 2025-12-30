// const name = document.getElementById("name")
// const email = document.getElementById("email")
// const subject = document.getElementById("subject")
// const menssage = document.getElementById("menssage")
// const btnSubmit = document.getElementById("btn-submit")

const form = document.querySelector("form")


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  console.log("funcionando")
  const name = form.querySelector("#name")
  console.log(name.value)
  if(name.value.trim() === ""){
    const p = document.createElement("p")
    p.textContent = "Nome vazio"
    const divDad = name.parentElement
    divDad.append(p)
  }
})

