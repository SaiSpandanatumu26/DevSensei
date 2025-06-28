function handleLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // TODO: Add authentication logic here if needed
  
    // Redirect to next page
    window.location.href = "dashboard.html"; // You can rename this when you provide the next page
  }
  