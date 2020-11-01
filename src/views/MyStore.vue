<template>
  <div class="fl-cn">
    <div class="my-store-ctn">
      <Loader v-if="isLoading" />
      <div class="my-store__details" v-if="!isLoading">
        <div class="my-store__heading">
          <h2>{{ store.name }}</h2>
          <button class="rounded-btn">Edit</button>
        </div>
        <hr style="width:100%; border:1px dashed grey" />
        <div class="my-store__sec">
          <h4>Description</h4>
          <p>{{ store.description }}</p>
        </div>
        <hr style="width:100%; border:1px dashed grey" />
        <div class="my-store__sec">
          <h4>Location</h4>
          <p>{{ store.addressLine1 }},</p>
          <p v-if="store.addressLine2">{{ store.addressLine2 }},</p>
          <p>{{ store.postcode }},</p>
          <p>{{ store.city }}</p>
        </div>
        <hr style="width:100%; border:1px dashed grey" />
        <div class="my-store__sec">
          <div class="my-store__heading">
            <h4>Dates</h4>
            <button
              class="rounded-btn"
              @click="toggleNewDate"
              v-if="!isNewDateActive"
            >
              Add date
            </button>
            <div v-if="isNewDateActive" class="my-store__add-date-btns">
              <button
                class="rounded-btn rounded-btn--confirm"
                @click="confirmNewDate"
              >
                Confirm
              </button>
              <button
                class="rounded-btn rounded-btn--cancel"
                @click="toggleNewDate"
              >
                Cancel
              </button>
            </div>
          </div>
          <new-date
            v-if="isNewDateActive"
            :newDate.sync="newDate"
            :newStartTime.sync="newStartTime"
            :newEndTime.sync="newEndTime"
          />
          <div v-for="(date, index) in store.dates" :key="index">
            <p>
              {{ date.formatted.date }}, {{ date.formatted.startTime }} -
              {{ date.formatted.endTime }}
            </p>
          </div>
        </div>
        <hr style="width:100%; border:1px dashed grey" />
        <div class="my-store__sec">
          <div class="my-store__heading">
            <h4>Items</h4>
            <router-link
              :to="'/my-stores/' + this.$route.params.storeId + '/add'"
            >
              <button class="rounded-btn">Add item</button>
            </router-link>
          </div>
          <div class="my-store__items">
            <div class="my-store__item" v-for="item in items" :key="item.id">
              <router-link :to="'/my-stores/' + store._id + '/' + item._id">
                <img
                  class="my-store__item-thumbnail"
                  v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
                />
              </router-link>
              <div class="my-store__item-name">
                <div>
                  {{ item.name }}
                </div>
                <div>£{{ item.unitPrice }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue";
import NewDate from "../components/NewDate.vue";
import moment from "moment";

export default {
  name: "MyStore",
  components: {
    Loader,
    NewDate,
  },
  data() {
    return {
      isLoading: true,
      individual: {},
      store: null,
      items: [],
      isNewDateActive: false,
      newDate: new Date().toISOString(),
      newStartTime: new Date().toISOString(),
      newEndTime: new Date().toISOString(),
    };
  },
  async mounted() {
    await this.setIndividual();
    this.getStore();
    this.getItems();
  },
  methods: {
    async setIndividual() {
      await axios
        .get("api/individual")
        .then((res) => {
          this.individual = res.data;
        })
        .catch((err) => console.log(err));
    },
    getStore() {
      axios
        .get(`api/stores/${this.$route.params.storeId}`)
        .then((res) => {
          this.store = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    getItems() {
      axios
        .get(
          `api/items?sortCriterion=0&type=0&storeId=${this.$route.params.storeId}`
        )
        .then((res) => {
          this.items = res.data;
          this.isLoading = false;
        })
        .catch((err) => console.log(err));
    },
    toggleNewDate() {
      this.isNewDateActive = !this.isNewDateActive;
    },
    confirmNewDate() {
      this.putDate();

      this.isNewDateActive = false;
    },
    putDate() {
      const startTime =
        new Date(this.newStartTime).getTime() -
        new Date(this.newStartTime).setHours(0, 0, 0, 0);

      const endTime =
        new Date(this.newEndTime).getTime() -
        new Date(this.newEndTime).setHours(0, 0, 0, 0);

      const startDate = new Date(this.newDate).getTime() + startTime;
      const endDate = new Date(this.newDate).getTime() + endTime;

      const formattedDate = moment(startDate).format("ddd Do MMM, YYYY");
      const formattedStartTime = moment(startDate).format("HH:mm");
      const formattedEndTime = moment(endDate).format("HH:mm");

      const date = {
        id: Math.random(),
        iso: {
          start: new Date(startDate).toISOString(),
          end: new Date(endDate).toISOString(),
        },
        formatted: {
          date: formattedDate,
          startTime: formattedStartTime,
          endTime: formattedEndTime,
        },
      };

      axios
        .put(`api/stores/${this.$route.params.storeId}`, { date: date })
        .then(() => this.store.dates.push(date))
        .catch((err) => console.log(err));
    },
  },
};
</script>
