// Simple demo client-side script. Replace AJAX with real API calls.
document.getElementById('year')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year2')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year3')?.appendChild(document.createTextNode(new Date().getFullYear()));
document.getElementById('year4')?.appendChild(document.createTextNode(new Date().getFullYear()));

function demoBuy(name, price){
  // Demo: show prompt and redirect to login if not "logged in"
  const user = localStorage.getItem('aimxit_user');
  if(!user){
    if(confirm('You must login to buy. Go to login page?')){
      window.location.href = 'login.html';
    }
    return;
  }
  alert(`Demo checkout: ${name} — ₹${price}\n(This is a demo. Integrate real payment gateway for production.)`);
  // In production: call server -> create order -> redirect to Razorpay/Stripe -> on success, server issues license via KeyAuth API
}

function demoLogin(e){
  e.preventDefault();
  const f = document.getElementById('loginForm');
  const username = f.username.value.trim();
  // Demo: set local user (in production, verify via server KeyAuth)
  localStorage.setItem('aimxit_user', username);
  alert('Demo login successful as ' + username);
  window.location.href = 'dashboard.html';
  return false;
}

function demoRegister(e){
  e.preventDefault();
  const f = document.getElementById('registerForm');
  if(f.password.value !== f.confirm.value){
    alert('Passwords do not match');
    return false;
  }
  // Demo: register and log in
  localStorage.setItem('aimxit_user', f.username.value.trim());
  alert('Account created (demo).');
  window.location.href = 'dashboard.html';
  return false;
}

