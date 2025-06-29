









function subscribe() {
  const email = document.querySelector('.contact input').value;
  if (email.trim() === "") {
    alert("Please enter a valid email.");
  } else {
    alert(`Subscribed successfully with: ${email}`);
  }
}















    document.querySelector("form").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you for contacting us!");
    });