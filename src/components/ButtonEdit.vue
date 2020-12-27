<template>
  <div>
    <button
      class="underline text-accent-dark"
      v-if="!currentlyEditing"
      @click="emitToggleEdit"
    >
      Edit
    </button>
    <div v-if="currentlyEditing" class="flex p-3">
      <button class="underline pr-3 text-accent-dark" @click="saveEdit()">
        Save
      </button>
      <button class="underline text-accent-dark" @click="emitToggleEdit">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonEdit",
  props: ["isEditing", "fieldName", "document", "fields"],
  computed: {
    currentlyEditing: {
      get() {
        return this.isEditing;
      },
    },
  },
  methods: {
    emitToggleEdit() {
      this.$emit("toggleEdit", this.fieldName, !this.currentlyEditing);
    },
    saveEdit() {
      const data = {};

      this.fields.forEach((field) => {
        data[field] = this.document[field];
      });

      this.$emit("callback", data, this.fieldName);
    },
  },
};
</script>
