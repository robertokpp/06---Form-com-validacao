// const name = document.getElementById("name")
// const email = document.getElementById("email")
// const subject = document.getElementById("subject")
// const menssage = document.getElementById("menssage")
// const btnSubmit = document.getElementById("btn-submit")

const form = document.querySelector("form")

function validation(element) {
  
}

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const name = form.querySelector("#name")

  console.log(name.value)
  if(name.value.trim() === ""){
    
  }
})

