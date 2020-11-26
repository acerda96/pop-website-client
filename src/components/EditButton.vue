<template>
  <div>
    <button
      class="underline text-gray-600"
      v-if="!isEditingTest"
      @click="toggleEditTest"
    >
      Edit
    </button>
    <div v-if="isEditingTest" class="store__add-date-btns">
      <button class="underline p-3 text-gray-600" @click="saveEdit()">
        Save
      </button>
      <button class="underline text-gray-600" @click="toggleEditTest">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditButton",
  props: ["isEditing", "isEditingFieldName", "store", "fields"],
  computed: {
    isEditingTest: {
      get() {
        return this.isEditing;
      },
    },
  },
  methods: {
    toggleEditTest() {
      this.$emit("toggleEdit", this.isEditingFieldName, !this.isEditingTest);
    },
    saveEdit() {
      const data = {};

      this.fields.forEach((field) => {
        data[field] = this.store[field];
      });

      this.$emit(
        "putStore",
        data,
        this.isEditingFieldName,
        !this.isEditingTest
      );
    },
  },
};
</script>
