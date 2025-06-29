









function subscribe() {
  const email = document.querySelector('.contact input').value;
  if (email.trim() === "") {
    alert("Please enter a valid email.");
  } else {
    alert(`Subscribed successfully with: ${email}`);
  }
}
