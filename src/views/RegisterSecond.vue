<template>
  <div class="register">
    <div class="register-outer">
      <div class="register-inner">
        <div style="font-weight: bold">
          We'd like a few more details about you...
        </div>
        <div class="input-container">
          <label for="name"> Name </label>
          <input type="text" name="name" />
        </div>
        <div class="input-container">
          <label for="surname"> Surname </label>
          <input type="text" name="surname" />
        </div>
        <div class="input-container">
          <label for="brandName"> Brandname </label>
          <input type="text" name="brandName" />
        </div>
        <div class="input-container">
          <label for="phoneNumber"> Mobile number </label>
          <input type="text" name="phoneNumber" />
        </div>
        <div class="input-container">
          <label for="email"> Password </label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Sign up</button>
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
