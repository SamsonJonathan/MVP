// Function to check if user is logged in
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    // User is logged in, update UI accordingly
    document.getElementById('show-login').textContent = 'Logout';
    // You might want to show a welcome message or the username here
  }
}

// Function to handle login
function login(username, password) {
  // This is where you'd normally send a request to your server to validate credentials
  // For this example, we'll just check if both fields are filled
  if (username && password) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    checkLoginStatus();
    alert('Login successful!');
    return true;
  }
  return false;
}

// Function to handle logout
function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');
  document.getElementById('show-login').textContent = 'Login';
  alert('You have been logged out.');
}

// Function to auto-fill login form
function autoFillLoginForm() {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    document.getElementById('username').value = savedUsername;
    document.getElementById('remember-me').checked = true;
  }
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('show-login');
  const loginSection = document.getElementById('login-section');
  const loginForm = document.getElementById('login-form');

  // Check login status on page load
  checkLoginStatus();

  loginBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (loginBtn.textContent === 'Logout') {
      logout();
    } else {
      loginSection.style.display = 'flex';
      autoFillLoginForm();
    }
  });

  loginSection.addEventListener('click', function(e) {
    if (e.target === loginSection) {
      loginSection.style.display = 'none';
    }
  });

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    if (login(username, password)) {
      loginSection.style.display = 'none';
      if (rememberMe) {
        localStorage.setItem('username', username);
      } else {
        localStorage.removeItem('username');
      }
    } else {
      alert('Invalid username or password');
    }
  });
});
