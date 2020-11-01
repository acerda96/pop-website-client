<template>
  <div class="datetime-picker">
    <div class="datetime-picker__dates">
      <div class="datetime-picker__col">
        <p>Date</p>
        <datetime
          class="datetime-picker__date"
          :min-datetime="currentDateTime"
          type="date"
          v-model="date"
        />
      </div>
      <div class="datetime-picker__col">
        <p>Start time</p>
        <datetime
          class="datetime-picker__time"
          :min-datetime="currentDateTime"
          type="time"
          v-model="startTime"
        />
      </div>
      <div class="datetime-picker__col">
        <p>End time</p>
        <datetime
          class="datetime-picker__time"
          :min-datetime="startTime"
          type="time"
          v-model="endTime"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseButton",
  components: {},
  computed: {
    date: {
      get() {
        return this.newDate;
      },
      set(val) {
        console.log(val);
        this.$emit("update:newDate", val);
      },
    },
    startTime: {
      get() {
        return this.newStartTime;
      },
      set(val) {
        console.log(val);
        this.$emit("update:newStartTime", val);
      },
    },
    endTime: {
      get() {
        if (this.newStartTime > this.newEndTime) {
          this.$emit("update:newEndTime", this.newStartTime);
          return this.newStartTime;
        }

        return this.newEndTime;
      },
      set(val) {
        console.log(val);
        this.$emit("update:newEndTime", val);
      },
    },
  },
  props: ["newDate", "newStartTime", "newEndTime"],
  data() {
    return {
      currentDateTime: new Date().toISOString(),
    };
  },
};
</script>
