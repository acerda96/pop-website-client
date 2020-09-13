<template>
  <div class="login">
    <div class="login-outer">
      <div class="login-inner">
        <div class="input-container">
          <label for="email"> Email </label>
          <input type="email" name="email" />
        </div>
        <div class="input-container">
          <label for="password"> Password </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
        <a>Forgotten your password?</a>
        <a>Don't have an account? Sign up now!</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

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
  background: rgb(202, 201, 201);
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
