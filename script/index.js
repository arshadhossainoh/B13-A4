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

  // id.parentNode.removeChild(selected);
  // const childElement = document.getElementById(id);
  // childElement.parentNode.removeChild(childElement);
  let jobPost = document.getElementById(id);
  jobPost.innerHTML = "";
  jobPost.style.border = "none";
  totalJobs.innerText = jobs.length--;
  jobCount.innerText = `${jobs.length} jobs`;
}

function addToInterview(id) {
  const jobPost = document.getElementById(id);
  const interviewSection = document.getElementById("interview");
  let interviewDiv1 = document.getElementById("interview-div-1");
  let interviewDiv2 = document.getElementById("interview-div-2");

  interviewDiv1.remove();
  interviewDiv2.innerHTML = `${jobPost.innerHTML}`;
  interviewSection.append(interviewDiv2);

  let statusBtn = document.getElementById("status-btn");
  statusBtn.innerText = "Interview";

  // let interviewCount = document.getElementById("interview-count");
  // interviewCount.innerText = 1;
}

function addToRejected(id) {
  const jobPost = document.getElementById(id);
  const rejectedSection = document.getElementById("rejected");
  let rejectedDiv1 = document.getElementById("rejected-div-1");
  let rejectedDiv2 = document.getElementById("rejected-div-2");

  rejectedDiv1.remove();
  rejectedDiv2.innerHTML = `${jobPost.innerHTML}`;
  rejectedSection.append(rejectedDiv2);
}
