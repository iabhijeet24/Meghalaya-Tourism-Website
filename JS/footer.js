
  document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form from refreshing page

    // Get input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

  
    if (email === "") {
      alert("Please enter a valid email.");
      return;
    }

    // Display success alert
    alert(`Thanks, ${name}!\nYou subscribed with: ${email}\nMessage: ${message}`);
  });
