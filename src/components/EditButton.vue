<template>
  <div>
    <button
      class="underline text-accent-dark"
      v-if="!currentlyEditing"
      @click="emitToggleEdit"
    >
      Edit
    </button>
    <div v-if="currentlyEditing" class="store__add-date-btns">
      <button class="underline p-3 text-accent-dark" @click="saveEdit()">
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
  name: "EditButton",
  props: ["isEditing", "isEditingFieldName", "document", "fields"],
  computed: {
    currentlyEditing: {
      get() {
        return this.isEditing;
      },
    },
  },
  methods: {
    emitToggleEdit() {
      this.$emit("toggleEdit", this.isEditingFieldName, !this.currentlyEditing);
    },
    saveEdit() {
      const data = {};

      this.fields.forEach((field) => {
        data[field] = this.document[field];
      });

      this.$emit(
        "callback",
        data,
        this.isEditingFieldName,
        !this.currentlyEditing
      );
    },
  },
};
</script>
