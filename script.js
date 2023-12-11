const width = document.body.offsetWidth;
const signupImage = document.getElementById("signup-image");
const image = document.createElement("img");

if (width > 500) {
  image.setAttribute("src", "./assets/images/illustration-sign-up-desktop.svg");
  image.setAttribute("class", "desktop-img");
} else {
  image.setAttribute("src", "./assets/images/illustration-sign-up-mobile.svg");
  image.setAttribute("class", "mobile-img");
}
signupImage.appendChild(image);

const subscribeForm = () => {
  const email = document.getElementById("email");
  let errormsg = "";
  if (!email.value) errormsg = "Please enter your email";
  else if (!validate(email.value)) errormsg = "Valid email required";
  document.getElementById("error-msg").innerHTML = errormsg;
  if (errormsg) {
    email.style.border = "1px solid rgb(255, 98, 87)";
  } else {
    const sucEmail = document.getElementById("success-email");
    sucEmail.innerHTML = email.value;
    document.querySelector(".signup").classList.toggle("hidden");
    document.querySelector(".successed").classList.toggle("hidden");
  }
};

const validate = (email) => {
  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
  return exptext.test(email);
};
