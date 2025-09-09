// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Show success message
  document.getElementById("formMessage").innerText = 
    `Thank you, ${name}! Your message has been sent.`;

  // Reset form
  document.getElementById("contactForm").reset();
});