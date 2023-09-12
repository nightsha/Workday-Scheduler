// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  function saveNote() {
    // console.log($(this))
    // console.log($(this).siblings('.description'))
    // console.log($(this).siblings('.description').val())
    var textValue = $(this).siblings(".description").val();
    var hourValue = $(this).parent().attr("id");
    // console.log (hourValue)

    localStorage.setItem(hourValue, textValue);
  }

  $(".description").each(function () {
    var hourValue = $(this).parent().attr("id");
    $(this).val(localStorage.getItem(hourValue));
  });
  $(".saveBtn").on("click", saveNote);

  //change color for timeBlock
  $('.time-block').each(function() {
    const blockHour =parseInt($(this).attr('id').split('-')[1])
const currentHour = dayjs().hour();
  console.log(blockHour, currentHour)
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  // TODO: Add a listener for click events on the save button. This code should
  //SAVE BUTTON/ LOCAL STORAGE
  // const saveButtons = document.querySelectorAll(".saveButton");

  // function handleSaveButtonClick() {

  // }

  // loop thru each button and add a click event listener
  // saveButtons.forEachFunction(button)
  // button.addEventListener("click", handleSaveButtonClick);
});
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

// const parentTimeBlock = event.target.closest(".time-block");

// if (parentTimeBlock) {
  // Extract the id attribute from the parent time-block
  // const timeBlockId = parentTimeBlock.id;
// 
  // console.log(timeBlockId);
// }
//    COLOR CODING
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

// console.log("Current hour (24-hour format): ${currentHour}");

// // const currentHour = new Date().getHours();

// const timeBlocks = document.querySelectorAll(".time-block");

// timeBlocks.forEach((timeBlock) => {
//   const blockHour = parseInt(timeBlock.id.split("-")[i]);

//   if (blockHour < currentHour) {
//     timeBlock.classList.add("past");
//   } else if (blockHour === currentHour) {
//     timeBlock.classList.add("present");
//   } else {
//     timeBlock.classList.add("future");
//   }
// });
// FILL TIME BLOCKS WHEN RETURNING TO OR RELOADING/RETRIEVAL
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

// if (localStorage.getItem("input")) {
  // document.getElementById("textarea").value = localStorage.getItem("input");
// }

//
// TODO: Add code to display the current date in the header of the page.
function displayCurrentDate() {
  const currentDateElement = document.getElementById("currentDate");
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  currentDateElement.textContent = "Today is" + formattedDate;

  window.onload = displayCurrentDate;
}
