//Variables that will used on my dates

const theDays = [
 {
  id: "0",
  hour: "07",
  time: "05",
  ante: "am",
  reminder: ""
 },
 {
  id: "1",
  hour: "08",
  time: "01",
  ante: "am",
  reminder: ""
 },
 {
  id: "2",
  hour: "09",
  time: "15",
  ante: "am",
  reminder: ""
 },
 {
  id: "3",
  hour: "10",
  time: "30",
  ante: "am",
  reminder: ""
 },

 {
  id: "4",
  hour: "10",
  time: "09",
  ante: "am",
  reminder: ""
 },

 {
  id: "4",
  hour: "10",
  time: "15",
  ante: "am",
  reminder: ""
 },

]

//functionality for the current date 
function currentMainDate() {
 let currentDate = dayjs().format("DDo MMM YYYY");
 $("#currentDay").text(currentDate);
}

currentMainDate();
console.log("App.JS is working");