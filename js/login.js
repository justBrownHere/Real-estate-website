//hiden pass login
const passField = document.querySelector(".password input");
const showBtn = document.querySelector(".password span i");
showBtn.onclick = () => {
  if (passField.type === "password") {
    passField.type = "text";
    showBtn.classList.add("hide-btn");
  } else {
    passField.type = "password";
    showBtn.classList.remove("hide-btn");
  }
};
//hiden pass signup
const passFild = document.querySelector(".password_sign input");
const shooBtn = document.querySelector(".password_sign span i");
shooBtn.onclick = () => {
  if (passFild.type === "password") {
    passFild.type = "text";
    shooBtn.classList.add("hide-btn");
  } else {
    passFild.type = "password";
    shooBtn.classList.remove("hide-btn");
  }
};
//item eye
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

const register = document.querySelector(".register");

register.onclick = function () {
  $(".tab-item.active").classList.remove("active");
  $(".tab-pane.active").classList.remove("active");

  line.style.left = tabs[1].offsetLeft + "px";
  line.style.width = tabs[1].offsetWidth + "px";

  tabs[1].classList.add("active");
  panes[1].classList.add("active");
};
const login = document.querySelector(".login");

login.onclick = function () {
  console.log("hi")
  $(".tab-item.active").classList.remove("active");
  $(".tab-pane.active").classList.remove("active");

  line.style.left = tabs[0].offsetLeft + "px";
  line.style.width = tabs[0].offsetWidth + "px";

  tabs[0].classList.add("active");
  panes[0].classList.add("active");
};
