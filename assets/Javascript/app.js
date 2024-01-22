
//The current Date for the header
function currentMainDate() {
 let currentDate = dayjs().format("D MMM YYYY");
 $("#currentDate").text(currentDate);
 console.log("Current Date", currentDate);
}

//The ability to save your task in within the block and utilise local storage
function saveBlockTime() {
 $(".saveBtn").on("click", function (event) {
  event.preventDefault();
  console.log("Save button has been clicked");
  //Getting the values
  const time = $(this).parent().attr("id");
  const text = $(this).siblings(".description").val();

  //local storage saving items 
  localStorage.setItem(time, text);
  //Testing to ensure its storing correctly 
  console.log("Stored Perfectly", { time, text });
 });
}


function timeTracking() {
 //current time
 const compareTime = dayjs().format("HH");
 console.log(compareTime);
 //To iterate over the time 
 $(".time-block").each(function () {
  const blockTime = parseInt($(this).attr("id").split("hour")[0]); // spliting it down to return the hour
  console.log(blockTime);

  // well create conditions to relate the time and colours 
  $(this).toggleClass("past", blockTime < compareTime);
  $(this).toggleClass("future", blockTime > compareTime);
  $(this).toggleClass("present", blockTime === compareTime);

  // the ability to reset the colours 
  if (blockTime === compareTime) {
   $(this).removeClass("past future").addClass("present")
  } else if (blockTime > compareTime) {
   $(this).removeClass("past present").addClass("future")
  } else {
   $(this).removeClass("future present").addClass("past");
  }

  // alert feature:  when the time has gone passed
  if (blockTime < compareTime) {
   const alertTime = `
   <div class="alert alert-danger alert-dismissible fade show" role="alert">
   <strong>Attention!</strong> ${blockTime}:00 has gone! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>`;
   $("#alert-container").append(alertTime);
  }

  //Testing to ensure its working 
  console.log(`Time ${blockTime}:`, {
   thePast: blockTime < compareTime,
   thePresent: blockTime === compareTime,
   TheFuture: blockTime > compareTime
  });
 });
}

//will grab the data saved from the localstorage
function loadSavedData() {
 $(".time-block").each(function () {
  const time = $(this).attr("id");
  const text = localStorage.getItem(time);
  // $(this).siblings(".description").val(text);

  //check if text is not null before setting it 
  if (text !== null) {
   $(this).find(".description").val(text);
  }
 });
}


//Executing Functions
timeTracking();
loadSavedData();
saveBlockTime();

currentMainDate();


// console.log("App.JS is working");
