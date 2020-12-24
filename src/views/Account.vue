<template>
  <div class="flex flex-col items-center mt-3 bg-white h-1/2 pt-10">
    <div>
      <div class="flex flex-col">
        <label> Password: </label>
        <input class="border" v-model="password" type="password" />
      </div>
      <button class="square-btn w-40 m-5" @click="deleteAccount">
        Delete account
      </button>
      <div class="mt-5 text-red-700" v-if="error">Failed to delete account</div>
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
    deleteAccount() {
      axios
        .delete("account", { data: { password: this.password } })
        .then(() => {
          this.error = false;
          this.$store.dispatch("logout").then(() => {
            this.$router.push("/");
          });
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>
