// [1] querySelector
// const h1 = document.querySelector('h1');
// h1.textContent = 'Hi Js';
// console.log(h1.textContent);

/*
   * Using query selector, you can select the HTML tag
      and you can modify it using the textContent.

   * DOM API provides a set of functions and methods to 
      modify the HTML document dynamically via JavaScript.
*/

// [2] getElementByID
// let textArray = ["hello javascript!", " Hi, There! "];
// let index = 0;

// function changeText() {
//   let element = document.getElementById("first");
//   element.innerHTML = textArray[index];
//   index = (index + 1) % textArray.length; // loop back to the first text when the end is reached.
// }

// [3] getElementsByName 
// function submitSurvey() {
//   const form = document.getElementById('surveyForm');

//   // Get elements by name for each question
// /*  const question1Answers = document.getElementsByName('question1');
//   const question2Answers = document.getElementsByName('question2'); */

//   // Function to get the selected value
//   /*function getSelectedValue(elements) {
//     for (let i = 0; i < elements.length; i++) {
//       if (elements[i].checked) {
//         return elements[i].value;
//       }
//     }
//     return null; // No option selected
//   }
//   */

//   // Get selected values
//   /*const selectedQuestion1 = getSelectedValue(question1Answers);
//   const selectedQuestion2 = getSelectedValue(question2Answers);*/

//   // Display the results
// /*alert(`Selected answers:
//   Question 1: ${selectedQuestion1}
//   Question 2: ${selectedQuestion2}`);*/
// }
