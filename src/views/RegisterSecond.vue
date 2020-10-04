<template>
  <div class="register">
    <div class="register-outer">
      <form class="register-inner" @submit.prevent="register">
        <div class="register-heading">
          Register
        </div>
        <hr />
        <div class="input-container">
          <label for="name"> Name </label>
          <input type="text" name="name" v-model="name" />
        </div>
        <div class="input-container">
          <label for="surname"> Surname </label>
          <input type="text" name="surname" v-model="surname" />
        </div>
        <div class="input-container">
          <label for="company"> Company (optional) </label>
          <input type="text" name="company" v-model="company" />
        </div>
        <div class="input-container">
          <label for="mobileNumber"> Mobile number </label>
          <input type="text" name="mobileNumber" v-model="mobileNumber" />
        </div>
        <div class="input-container">
          <label for="email"> Email </label>
          <input type="email" name="email" v-model="email" />
        </div>
        <div class="input-container">
          <label for="password"> Password </label>
          <input type="password" name="password" v-model="password" />
        </div>
        <div class="input-container">
          <label for="confirmPassword"> Confirm password </label>
          <input
            type="password"
            name="confirmPassword"
            v-model="confirmPassword"
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterFirst",
  data() {
    return {
      email: "",
      name: "",
      surname: "",
      password: "",
      confirmPassword: "",
      mobileNumber: "",
      company: "",
    };
  },
  methods: {
    register: function() {
      let data = {
        email: this.email,
        name: this.name,
        surname: this.surname,
        password: this.password,
        confirmPassword: this.confirmPassword,
        mobileNumber: this.mobileNumber,
        company: this.company,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
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
