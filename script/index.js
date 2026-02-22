//show selected tab
function showOnly(id) {
  // const all = document.getElementById("add-money");
  // const cashout = document.getElementById("cashout");
  // const history = document.getElementById("history");

  const all = document.getElementById("all");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");

  all.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  //hide eveeryone
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  cashout.classList.add("hidden");

  //only show id wala
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
