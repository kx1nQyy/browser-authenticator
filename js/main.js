const userLogin = 'kx1nQy';
const userPassword = '123456';

const inputLogin = prompt('Enter your login');
const inputPassword = prompt('Enter your password');

let isAuthenticated = false;

let notMatchText = 'The username or password do not match';

if (userLogin === inputLogin) {
    
    if (userPassword === inputPassword) {
        isAuthenticated = true;
        alert('The password matches');
    } else {
        alert(notMatchText);
    }
} else {
    alert(notMatchText);
}
