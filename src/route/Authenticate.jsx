export function authenticate(username, password) {
    // Replace with your backend authentication logic
    const dummyUsername = 'Surya@gmail.com';
    const dummyPassword = 'surya123';
  
    if (username === dummyUsername && password === dummyPassword) {
      return true; // Authentication successful
    } else {
      return false; // Authentication failed
    }
  }