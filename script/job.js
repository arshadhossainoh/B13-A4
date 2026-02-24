let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

let jobCount = document.getElementById("job-count");

const allJobs = document.getElementById("alljobs");
console.log(allJobs.children.length);

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
  currentStatus = id;

  // remove newly applying color and setting new
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-blue-600", "text-black");

  if (id == "interview-filter-btn") {
    allJobs.classList.add("hidden");
    filterSection.classList.remove("hidden");

    renderInterview();
    renderEmpty(interviewList);
    jobCount.innerText = `${interviewList.length} jobs`;
  } else if (id == "all-filter-btn") {
    allJobs.classList.remove("hidden");
    filterSection.classList.add("hidden");
    jobCount.innerText = `${allJobs.children.length} jobs`;
  } else if (id == "rejected-filter-btn") {
    allJobs.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderRejected();
    renderEmpty(rejectedList);
    jobCount.innerText = `${rejectedList.length} jobs`;
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

    const companyExist = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!companyExist) {
      interviewList.push(jobInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    CalCount();
    if (currentStatus == "rejected-filter-btn") {
      renderRejected();
    }
    // renderInterview();
  } else if (e.target.classList.contains("rejected-btn")) {
    const parentNode = e.target.parentNode.parentNode;
    const companyName = parentNode.querySelector(".company-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobPerks = parentNode.querySelector(".perks").innerText;
    const jobStatus = parentNode.querySelector(".status").innerText;
    const jobNotes = parentNode.querySelector(".notes").innerText;

    parentNode.querySelector(".status").innerText = "Rejected";

    const jobInfo = {
      companyName,
      jobTitle,
      jobPerks,
      jobStatus,
      jobNotes,
    };

    const companyExist = rejectedList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!companyExist) {
      rejectedList.push(jobInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.companyName != jobInfo.companyName,
    );

    if (currentStatus == "interview-filter-btn") {
      renderInterview();
    }

    CalCount();
    // renderRejected();
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

function renderRejected() {
  filterSection.innerHTML = "";

  for (let reject of rejectedList) {
    console.log(reject);
    let div = document.createElement("div");
    div.className = "card border border-gray-200 ";
    div.innerHTML = `
      <div class="card-left">
            <h3 class="company-name">${reject.companyName}</h3>
            <p class="job-title">${reject.jobTitle}</p>
            <br />
            <p class="perks">${reject.jobPerks}</p>

            <br />
            <!-- status  -->
            <p class="status">${reject.jobStatus}</p>
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

jobCount.innerText = `${allJobs.children.length} jobs`;

let allCompanyName = document.getElementsByClassName("company-name");
console.log("total company", allCompanyName.length);

// delete job posting
function deleteJob(id) {
  // const jobBoard = document.getElementById("job-board");

  // id.parentNode.removeChild(selected);
  // const childElement = document.getElementById(id);
  // childElement.parentNode.removeChild(childElement);
  let jobPost = document.getElementById(id);
  jobPost.innerHTML = "";
  jobPost.style.border = "none";
  total.innerText = allCompanyName.length--;
  jobCount.innerText = `${allCompanyName.length--} jobs`;
}

function renderEmpty(list) {
  if (list.length == 0) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div
        id="interview-div-1"
        class="w-11/12 p-50 flex flex-col items-center border border-gray-200"
      >
        <img src="./images/jobs.png" alt="" />
        <h3>No jobs available</h3>
        <p>Check back soon for new job opportunites</p>
      </div>
    `;
    filterSection.append(div);
    filterSection.classList.remove("hidden");
  }
}

console.log(interviewList.length);
