<template>
  <div class="login">
    <div class="login-outer">
      <form class="login-inner" @submit.prevent="login">
        <div class="register-heading">
          Login
        </div>
        <hr />
        <div class="input-container">
          <label for="email"> Email </label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div class="input-container">
          <label for="password"> Password </label>
          <input type="password" name="password" v-model="password" />
        </div>
        <button type="submit">Login</button>
        <a>Forgotten your password?</a>
        <a>Don't have an account? Sign up now!</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/browse"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">
@import "../styles/abstracts/_variables.scss";

.input-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.login {
  display: flex;
  justify-content: center;
  width: 100%;
}

.login-outer {
  width: 100%;
}

.login-inner {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    border-radius: 5px;
    border: none;
    padding: 5px;
  }

  button {
    border-radius: 5px;
    border: none;
    padding: 5px;
  }

  a {
    text-decoration: underline;
  }
}
</style>
