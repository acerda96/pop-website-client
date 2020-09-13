<template>
  <div class="register">
    <div class="register-outer">
      <div class="register-inner">
        <div class="input-container">
          <label for="email"> Email </label>
          <input type="email" name="email" />
        </div>
        <div class="input-container">
          <label for="password"> Password </label>
          <input type="password" name="password" />
        </div>
        <div class="input-container">
          <label for="confirmPassword"> Confirm password </label>
          <input type="password" name="confirmPassword" />
        </div>
        <router-link to="/sign-up-2">
          <button type="submit">Next</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterFirst",
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.input-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.register {
  display: flex;
  justify-content: center;
  width: 100%;
}

.register-outer {
  width: 100%;
}

.register-inner {
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
