const formValidation = document.forms[0];
console.log(formValidation[(name = "email")].value);
formValidation.onsubmit = function (event) {
  event.preventDefault();
  console.log(event);

  const matchingEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (formValidation[(name = "email")].value.match(matchingEmail)) {
    document.getElementById("container").remove();
    document.getElementById("success-message").style.display = "block";
  } else {
    document.getElementsByTagName("label")[1].style.cssText =
      "display:block;animation-play-state:running";
    document.forms[0][0].style.cssText =
      "background-color:hsl(4, 100%, 67%,50%);border-color:hsl(4, 100%, 67%);";
    document.forms[0][0].classList += " active-placeholder";
    setTimeout(() => {
      document.getElementsByTagName("label")[1].style.cssText =
        "animation-play-state:paused;display:block;";
    }, 300);
  }
};

if (window.outerWidth == 720) {
  console.log("window is smaller than 720px");
}
