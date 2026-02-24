let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

const allJobs = document.getElementById("alljobs");

//get hold of main container
const mainContainer = document.querySelector("main");
console.log(mainContainer);

//filter section
const filterSection = document.getElementById("filtered-section");

//calculate count
function CalCount() {
  total.innerText = allJobs.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

CalCount();

//making toggleing buttons
const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

function toggleStyle(id) {
  // adding gray for all
  allFilterBtn.classList.add("bg-gray-300", "text-black");
  interviewFilterBtn.classList.add("bg-gray-300", "text-black");
  rejectedFilterBtn.classList.add("bg-gray-300", "text-black");

  // remove btns previous colors

  allFilterBtn.classList.remove("bg-blue-600", "text-white");
  interviewFilterBtn.classList.remove("bg-white", "text-black");
  rejectedFilterBtn.classList.remove("bg-white", "text-black");

  const selected = document.getElementById(id);

  // remove newing applying clore and setting new
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-blue-600", "text-black");

  if (id == "interview-filter-btn") {
    allJobs.classList.add("hidden");
    filterSection.classList.remove("hidden");
  } else if (id == "all-filter-btn") {
    allJobs.classList.remove("hidden");
    filterSection.classList.add("hidden");
  }
}

mainContainer.addEventListener("click", function (e) {
  // console.log(e.target);
  console.log(e.target.classList.contains("interview-btn"));
  if (e.target.classList.contains("interview-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobPerks = parentNode.querySelector(".perks").innerText;
    const jobStatus = parentNode.querySelector(".status").innerText;
    const jobNotes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = "Interview";

    const jobInfo = {
      companyName,
      jobTitle,
      jobPerks,
      jobStatus,
      jobNotes,
    };

    const interviewExist = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!interviewExist) {
      interviewList.push(jobInfo);
    }
    renderInterview();
  }
});

function renderInterview() {
  filterSection.innerHTML = "";

  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "card border border-gray-200 ";
    div.innerHTML = `
      <div class="card-left">
            <h3 class="company-name">${interview.companyName}</h3>
            <p class="job-title">${interview.jobTitle}</p>
            <br />
            <p class="perks">${interview.jobPerks}</p>

            <br />
            <!-- status  -->
            <p class="status">${interview.jobStatus}</p>
            <!-- <button id="status-btn" class="border border-gray-300 p-1">
              NOT APPLIED
            </button> -->
            <p class="mb-5 notes">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
            </p>

            <button
              id="interview-btn"
              class="btn btn-outline btn-success mr-3 interview-btn interview-btn"
            >
              INTERVIEW
            </button>
            <button
              id="rejected-btn"
              class="btn btn-outline btn-error rejected-btn"
            >
              REJECTED
            </button>
          </div>
          
    `;
    filterSection.appendChild(div);
  }
}
