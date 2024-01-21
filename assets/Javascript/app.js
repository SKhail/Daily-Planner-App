
//Include the current Date  / Time
function currentMainDate() {
 let currentDate = dayjs().format("D MMM YYYY");
 $("#currentDate").text(currentDate);
 console.log("Current Date", currentDate);
}


//The ability to save your task in within the block and utilise local storage
function saveBlockTime() {
 $(".saveBtn").on("click", function () {
  //Getting the values
  const time = $(this).parent("id");
  const text = $(this).siblings(".description").val();

  //local storage 
  localStorage.setItem(time, text);
  //Testing to ensure its storing correctly 
  console.log("Stored", { time, text });
 })
}

//create a function that can change each time block based on the colours of: grey colour associating the past, red associating the present and green associating the future
function timeTracking() {
 //current time
 const compareTime = dayjs().format("HH");
 console.log(compareTime);
 //To iterate over the time 
 $(".time-block").each(function () {
  const blockTime = parseInt($(this).attr("id").split("hour")[1]);// spliting

  // well create conditions to relate the time and colours 
  $(this).toggleClass("future", blockTime > compareTime);
  $(this).toggleClass("past", blockTime < compareTime);
  $(this).toggleClass("present", blockTime === compareTime);

  //the ability to reset the colours when its  past(grey) , present(red) Future(Green)
  if (blockTime === compareTime) {
   $(this).removeClass("past future").addClass("present")
  } else if (blockTime > compareTime) {
   $(this).removeClass("past present").addClass("future")
  } else {
   $(this).removeClass("future present").addClass("past");
  }

  //Testing to ensure its working 
  console.log(`Time ${blockTime}:`, {
   thePast: blockTime < compareTime,
   thePresent: blockTime === compareTime,
   TheFuture: blockTime > compareTime
  });
 });
}




//Executing Functions
timeTracking();
saveBlockTime();

currentMainDate();
console.log("App.JS is working");