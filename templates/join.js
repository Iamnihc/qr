function redirToGame(event) {
  code = document.getElementById("code").value;
  window.location.href = `${code}`;
  console.log(code);
  event.preventDefault();
  return false;
}
