const { initializeApp } = require('firebase/app');

const firebaseConfig = {
    apiKey: "<your-api-key-here>",
    authDomain: "<your-authDomain-here>",
    projectId: "<your-projectId-here>",
    storageBucket: "<your-storageBucket-here>",
    messagingSenderId: "<your-messagingSenderId-here>",
    appId: "<your-appId-here>",
    measurementId: "<your-measurementId-here>"
};

// Initialize Firebase
initializeApp(firebaseConfig);
