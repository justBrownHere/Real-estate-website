const activeBtn = document.querySelector(".btn-violate button");
const unactiveForm = document.querySelector(".skip-button button")

activeBtn.addEventListener("click", () => {
  // alert("Oke")
  document.querySelector(".wrap-form").classList.add("active");
});
unactiveForm.addEventListener("click",()=>{
  document.querySelector(".wrap-form").classList.remove("active");
})
