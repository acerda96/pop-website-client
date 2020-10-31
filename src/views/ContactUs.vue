<template>
  <div class="fl-cn">
    <div>
      <form class="basic-form" @submit.prevent="submit">
        <div class="basic-form__heading">Contact Us</div>
        <div class="basic-form__input-ctn">
          <label for="name"> First name </label>
          <input type="text" name="firstName" v-model="firstName" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="name"> Last name </label>
          <input type="text" name="lastName" v-model="lastName" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="name"> Email </label>
          <input type="text" name="email" v-model="email" />
        </div>
        <div class="basic-form__input-ctn">
          <label for="name"> Message </label>
          <textarea type="text" name="message" v-model="message" />
        </div>
        <button type="submit" class="contact-btn">Submit</button>
        <div v-if="success" class="basic-form--success">
          Thanks, we will try to get back to you within 24h!
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactUs",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      success: null,
    };
  },
  methods: {
    submit() {
      axios
        .post("api/contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        })
        .then(() => (this.success = true))
        .catch((err) => console.log(err));

      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
