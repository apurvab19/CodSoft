  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
   const firebaseConfig = {
    apiKey: "AIzaSyAZa2D8vVELmm3BV6PDREGAL4sa9ehrooY",
    authDomain: "quiz-app-59de8.firebaseapp.com",
    projectId: "quiz-app-59de8",
    storageBucket: "quiz-app-59de8.appspot.com",
    messagingSenderId: "1031664542544",
    appId: "1:1031664542544:web:bc130cd12b5afe6a62c255",
    measurementId: "G-GVXZPY9CVY"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

async function registerUser(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered:', userCredential.user);
      alert("Registration successful!");
    } catch (error) {
      console.error('Error registering user:', error.message);
      document.getElementById('error-message').innerText = error.message;
    }
  }
  