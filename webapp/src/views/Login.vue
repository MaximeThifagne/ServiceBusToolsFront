<template>
  <div>
    <form @submit.prevent="login">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="monemail@domain.com"
      />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="your password"
      />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("User logged successfully");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
