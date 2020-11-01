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
          :min-datetime="currentDateTime"
          type="time"
          v-model="endTime"
        />
      </div>
    </div>
    <div class="datetime-picker__icons">
      <Check />
      <Close />
    </div>
  </div>
</template>

<script>
import Check from "vue-material-design-icons/Check.vue";
import Close from "vue-material-design-icons/Close.vue";

export default {
  name: "BrowseButton",
  components: {
    Check,
    Close,
  },
  data() {
    return {
      currentDateTime: new Date().toISOString(),
      date: new Date().toISOString(),
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
    };
  },
};
</script>
