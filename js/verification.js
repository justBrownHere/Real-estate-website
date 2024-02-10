const passField = document.querySelector(".password input");
const showBtn = document.querySelector(".password span i");
showBtn.onclick = (()=>{
if(passField.type === "password"){
  passField.type = "text";
  showBtn.classList.add("hide-btn");
}else{
  passField.type = "password";
  showBtn.classList.remove("hide-btn");
}
});