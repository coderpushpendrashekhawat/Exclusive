function createaccount() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#pass").value;
  localStorage.setItem("Name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("pass", pass);
  location.href = "index.html";
}

function logins() {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let pass = document.querySelector("#pass").value;
    localStorage.setItem("Name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("pass", pass);
    location.href = "index.html";
}

