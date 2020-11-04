<template>
  <div>
    <button class="square-btn" v-if="!isEditingTest" @click="toggleEditTest">
      Edit
    </button>
    <div v-if="isEditingTest" class="store__add-date-btns">
      <button class="square-btn square-btn--confirm" @click="saveEdit()">
        Save
      </button>
      <button class="square-btn square-btn--cancel" @click="toggleEditTest">
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
      console.log(this.isEditingFieldName);
      this.$emit("toggleEdit", this.isEditingFieldName, !this.isEditingTest);
    },
    saveEdit() {
      console.log("STORE", this.store);

      this.$emit("putStore", { [this.fields]: this.store[this.field] });
      this.toggleEditTest();
    },
  },
};
</script>
