const userLogin = prompt('Create your login');
const userPassword = prompt('Create your password');

const inputLogin = prompt('Enter your login');
const inputPassword = prompt('Enter your password');

let isAuthenticated = false;

if (userLogin === inputLogin) {
    
    if (userPassword === inputPassword) {
        isAuthenticated = true;
        alert('The password matches');
    } else {
        alert('The username or password do not match');
    }
} else {
    alert('The username or password do not match');
}
