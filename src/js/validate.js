const name = document.querySelector("#name");
const nameWarning = document.querySelector("#name_warning");
const where = document.querySelector("#where");
const where_warning = document.querySelector("#where_warning");
const check_data = document.querySelector("#check_data");
const fake_check_data = document.querySelector("#fake_check_data");
const send_btn = document.querySelector(".request__send");

send_btn.addEventListener("click", validate);

function validate() {
  check_text(name, nameWarning, "Укажите ваше имя");
  check_text(
    where,
    where_warning,
    "Укажите страну, куда вы хотите отправиться"
  );
  check();
}
function check() {
  if (check_data.checked) {
    fake_check_data.classList.remove("warning");
  } else {
    fake_check_data.classList.add("warning");
  }
}
function check_text(item, warning, message) {
  if (item.value) {
    item.classList.remove("warning");
    warning.textContent = "";
  } else {
    item.classList.add("warning");
    warning.textContent = message;
  }
}
