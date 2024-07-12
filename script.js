function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Dummy login implementation
    if (username === 'user' && password === 'pass') {
        alert('Login successful!');
        window.location.href = 'home.html'; // Navigate to home screen
    } else {
        alert('Invalid username or password.');
    }
}

function registerUser() {
    const username = document.getElementById('user-reg-username').value;
    const password = document.getElementById('user-reg-password').value;
    const confirmPassword = document.getElementById('user-reg-confirm-password').value;

    if (password === confirmPassword) {
        alert(`Registered User:\nUsername: ${username}`);
        window.location.href = 'index.html'; // Navigate back to main screen
    } else {
        alert('Passwords do not match.');
    }
}

function registerBusiness() {
    const username = document.getElementById('business-reg-username').value;
    const password = document.getElementById('business-reg-password').value;
    const confirmPassword = document.getElementById('business-reg-confirm-password').value;

    if (password === confirmPassword) {
        alert(`Registered Business Owner:\nUsername: ${username}`);
        window.location.href = 'index.html'; // Navigate back to main screen
    } else {
        alert('Passwords do not match.');
    }
}

function uploadBackground() {
    const photo = document.getElementById('background-photo').files[0];
    
    if (photo) {
        alert(`Background photo ${photo.name} uploaded successfully!`);
        // Here you would add logic to handle the file upload.
    } else {
        alert('Please select a photo to upload.');
    }
}

function adminLogin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    if (username === 'Carl' && password === 'Isamoki23!') {
        alert('Admin login successful!');
        window.location.href = 'admin.html'; // Navigate to admin screen
    } else {
        alert('Invalid admin username or password.');
    }
}

function showAdminLogin() {
    document.getElementById('admin-login-popup').style.display = 'flex';
}

function closeAdminLogin() {
    document.getElementById('admin-login-popup').style.display = 'none';
}
