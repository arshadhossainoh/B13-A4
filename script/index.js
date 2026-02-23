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

// delete job posting
function deleteJob(id) {
  // const jobBoard = document.getElementById("job-board");
  // const delteteBtn = document.getElementById("del");

  // const selected = document.getElementById(id);
  // id.parentNode.removeChild(selected);

  // const childElement = document.getElementById(id);
  // childElement.parentNode.removeChild(childElement);
  let jobPost = document.getElementById(id);
  jobPost.innerHTML = "";
  totalJobs.innerText = jobs.length--;
  jobCount.innerText = `${jobs.length} jobs`;
}

// const delteteBtn = document.getElementById("del");
// delteteBtn.addEventListener("click", function () {
//   console.log("btn clicked");
// });
