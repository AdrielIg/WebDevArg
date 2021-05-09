const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = mobileNav.querySelectorAll("a");
const logo = document.querySelector("#inicio");
const form = document.getElementById("my-form");
const status = document.getElementById("my-form-status");



burger.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-open");
    burger.classList.toggle("toggle");
    logo.classList.toggle("inicio-logo")
    document.body.classList.toggle("hide");
  });
  
  mobileLinks.forEach(mobileLink => {
    mobileLink.addEventListener("click", () => {
      mobileNav.classList.toggle("mobile-open");
      burger.classList.toggle("toggle");
      document.body.classList.toggle("hide");
    });
  });
  


//NO REDIRECCIONE EL CONTACR FORM

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Enviado Correctamente!";
  }

  function error() {
    status.classList.add("error")
    status.innerHTML = "Oops! Hubo un problema.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}