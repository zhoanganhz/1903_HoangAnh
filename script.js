document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('register-btn').classList.remove('active');
  });
  
  document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
    this.classList.add('active');
    document.getElementById('login-btn').classList.remove('active');
  });