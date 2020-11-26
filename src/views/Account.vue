<template>
  <div class="flex flex-col items-center mt-10">
    <div class="flex flex-col">
      <label> Password: </label>
      <input v-model="password" type="password" />
    </div>
    <button class="square-btn w-40 m-5" @click="deleteAccount">
      Delete account
    </button>
    <div class="mt-5 text-red-700" v-if="error">Failed to delete account</div>
  </div>
</template>

<script>
import axios from "axios";
import setIndividual from "@/utils/individual";

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
    deleteAccount() {
      axios
        .delete("api/account", { data: { password: this.password } })
        .then(() => {
          this.error = false;
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/");
          });
        })
        .catch(() => {
          console.log("HI");
          this.error = true;
        });
    },
  },
};
</script>
