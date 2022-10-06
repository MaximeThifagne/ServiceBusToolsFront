<template>
  <div>
    <form @submit.prevent="register">
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Your email"
      />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Your password"
      />
      <input type="submit" value="Register">
    </form>
  </div>
</template>

<script>
    import firebase from "firebase/compat/app"
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() =>{
        alert("User successfuly registered");
        this.$router.push("/login");
      })
      .catch(error => {
        alert(error.message)
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>