//show selected tab

function showOnly(id) {
  const jobBoard = document.getElementById("job-board");
  const interview = document.getElementById("interview");
  const rejected = document.getElementById("rejected");

  //hide eveeryone
  jobBoard.classList.add("hidden");
  interview.classList.add("hidden");
  rejected.classList.add("hidden");

  //only show id wala
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
