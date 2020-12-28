<template>
  <div class="fade-in flex flex-col items-center mt-3 bg-white h-1/2 pt-10">
    <div>
      <div class="flex flex-col">
        <label> Password: </label>
        <input class="pl-2 border" v-model="password" type="password" />
      </div>
      <button class="square-btn w-40 m-5" @click="deleteAccount">
        Delete account
      </button>
      <div class="mt-5 text-red-700 text-center" v-if="error">
        Incorrect password
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import setIndividual from "@/lib/individual";

export default {
  name: "Account",
  data() {
    return {
      individual: {},
      password: "",
      error: false,
    };
  },
  async mounted() {
    this.individual = await setIndividual();
  },
  methods: {
    async deleteAccount() {
      if (window.confirm("Are you sure you want to delete your account?")) {
        try {
          await axios.post("account/delete", { password: this.password });
          this.$store.dispatch("logout");
          this.error = false;
        } catch {
          this.error = true;
        }
      }
    },
  },
};
</script>
