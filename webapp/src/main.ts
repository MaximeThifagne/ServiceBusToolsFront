import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyC9zBfudVqaIn_oHXjsi7ls6JdB9ZtXyQk",
  authDomain: "servicebustools.firebaseapp.com",
  projectId: "servicebustools",
  storageBucket: "servicebustools.appspot.com",
  messagingSenderId: "669498911458",
  appId: "1:669498911458:web:8744f9b22773511ff0ccbb",
  measurementId: "G-HRMSJRQP2E",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
