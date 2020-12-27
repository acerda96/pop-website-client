<template>
  <div class="fade-in datetime-picker">
    <div class="datetime-picker__dates">
      <div class="datetime-picker__col">
        <p>Date</p>
        <datetime :min-datetime="currentDateTime" type="date" v-model="date" />
      </div>
      <div class="datetime-picker__col">
        <p>Start time</p>
        <datetime
          class="datetime-picker__time"
          type="time"
          v-model="startTime"
          title="Start time"
        />
      </div>
      <div class="datetime-picker__col">
        <p>End time</p>
        <datetime
          class="datetime-picker__time"
          :min-datetime="startTime"
          type="time"
          v-model="endTime"
          title="End time"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DateNew",
  components: {},
  props: ["newDate", "newStartTime", "newEndTime"],
  computed: {
    date: {
      get() {
        return this.newDate;
      },
      set(val) {
        this.$emit("update:newDate", val);
      },
    },
    startTime: {
      get() {
        return this.newStartTime;
      },
      set(val) {
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
        this.$emit("update:newEndTime", val);
      },
    },
  },

  data() {
    return {
      currentDateTime: new Date().toISOString(),
    };
  },
};
</script>
