let Form = document.getElementById("myForm");
let Name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let Msg = document.querySelector("#msg");
let submit = document.querySelector("#submit-btn");
let error = document.querySelector("#error");
let Msg1 = document.querySelector("#msg1");

///SubmitFunction

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    Name1.value.length === 0 ||
    email.value.length === 0 ||
    Msg.value.length === 0
  ) {
    console.log(false);
    error.innerHTML = "<h4 class=error>Please complete the Details!</h4>";
    setTimeout(() => document.querySelector(".error").remove(), 3000);
  } else {
    Msg1.innerHTML = "<h4 class=msg1>Thank you for accesing my Website!</h4>";
    setTimeout(() => document.querySelector(".msg1").remove(), 3000);
    Form.submit();
  }
});
