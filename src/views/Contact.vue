<template>
  <div class="fade-in flex justify-center mt-10">
    <div>
      <form class="basic-form" @submit.prevent="submit">
        <div class="basic-form__heading">Contact Us</div>
        <div class="w-full flex flex-col p-2">
          <label for="name"> First name </label>
          <input
            class="pl-2"
            type="text"
            name="firstName"
            v-model="firstName"
            required
          />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="name"> Last name </label>
          <input class="pl-2" type="text" name="lastName" v-model="lastName" />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="name"> Email </label>
          <input
            class="pl-2"
            type="email"
            name="email"
            v-model="email"
            required
          />
        </div>
        <div class="w-full flex flex-col p-2">
          <label for="name"> Message </label>
          <textarea
            class="pl-1"
            type="text"
            name="message"
            v-model="message"
            required
          />
        </div>
        <button type="submit" class="square-btn">Submit</button>
        <div
          v-if="success"
          class="bg-green-100 border-1 border-green-400 p-2 mt-2"
        >
          Thanks, we will try to get back to you within 24 hours!
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
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
    async submit() {
      try {
        await axios.post("contact", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          message: this.message,
        });
        this.success = true;
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.message = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
