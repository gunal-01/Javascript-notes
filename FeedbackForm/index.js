// Selecting elements using getElementById()
const formTitle = document.getElementById("form-title");
const formDescription = document.getElementById("form-description");
const submitButton = document.getElementById("submitBtn");
const outputDiv = document.getElementById("output");

// Updating title and description dynamically
formTitle.textContent = "Interactive Feedback Form";
formDescription.textContent = "Share your thoughts with us below!";

// Adding event listener to the submit button
submitButton.addEventListener("click", () => {
  // Selecting input fields directly by ID
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  // Validation checks with specific messages
  if (!name) {
    alert("Please enter your name.");
    return;
  }
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  if (!feedback) {
    alert("Please provide your feedback.");
    return;
  }

  // Displaying the output
  outputDiv.innerHTML = `
    <h3>Thank you for your feedback!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Feedback:</strong> ${feedback}</p>
  `;
});

// Styling the output using getElementsByClassName()
const formFields = document.getElementsByClassName("form-field");
for (let i = 0; i < formFields.length; i++) {
  formFields[i].style.marginBottom = "20px";
}

// Demonstrating getElementsByName() (example)
const feedbackForm = document.forms["feedbackForm"];
console.log("Form elements by name:", feedbackForm.elements);
