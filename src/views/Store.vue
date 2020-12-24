<template>
  <div class="flex justify-center xs:w-full">
    <div class="flex justify-center bg-white w-5/6 xs:w-full xs:my-1">
      <NewItemModal />
      <Loader v-if="isLoading" />
      <div class="store__details" v-if="!isLoading">
        <div class="flex justify-between items-center w-full">
          <h2 class="text-3xl text-center py-3" v-if="!isEditingStore">
            {{ store.name }}
          </h2>
          <input
            v-if="isEditingStore"
            v-model="store.name"
            class="border border-accent-dark pl-4"
          />
          <EditButton
            :store="store"
            :fields="['name']"
            isEditingFieldName="isEditingStore"
            :isEditing.sync="isEditingStore"
            @putStore="putStore"
            @toggleEdit="toggleEdit"
          />
        </div>
        <hr class="w-full" />
        <div class="flex flex-col justify-start w-full mb-5">
          <div class="flex justify-between">
            <h4 class="text-xl">Description</h4>
            <EditButton
              :store="store"
              :fields="['description']"
              isEditingFieldName="isEditingDescription"
              :isEditing.sync="isEditingDescription"
              @putStore="putStore"
              @toggleEdit="toggleEdit"
            />
          </div>
          <p v-if="!isEditingDescription">{{ store.description }}</p>
          <input
            v-if="isEditingDescription"
            v-model="store.description"
            class="border border-accent-dark pl-4"
          />
        </div>
        <hr class="w-full" />
        <div class="flex flex-col justify-start w-full mb-5">
          <div class="flex justify-between">
            <h4 class="text-xl">Location</h4>
            <EditButton
              :store="store"
              :fields="['addressLine1', 'addressLine2', 'postcode', 'city']"
              isEditingFieldName="isEditingLocation"
              :isEditing.sync="isEditingLocation"
              @putStore="putStore"
              @toggleEdit="toggleEdit"
            />
          </div>
          <div v-if="!isEditingLocation">
            <p v-if="store.addressLine1">{{ store.addressLine1 }},</p>
            <p v-if="store.addressLine2 && !isEditingLocation">
              {{ store.addressLine2 }},
            </p>
            <p v-if="store.postcode">{{ store.postcode }},</p>
            <p v-if="store.city">{{ store.city }}</p>
          </div>
          <div class="flex flex-col" v-if="isEditingLocation">
            <input
              class="border border-accent-dark pl-4"
              v-model="store.addressLine1"
            />
            <input
              class="border border-accent-dark pl-4"
              v-model="store.addressLine2"
            />
            <input
              class="border border-accent-dark pl-4"
              v-model="store.postcode"
            />
            <input
              class="border border-accent-dark pl-4"
              v-model="store.city"
            />
          </div>
        </div>
        <hr class="w-full" />
        <div class="flex flex-col justify-start w-full mb-5">
          <div class="flex justify-between">
            <h4 class="text-xl">Dates</h4>
            <button
              class="underline text-accent-dark"
              @click="toggleNewDate"
              v-if="!isNewDateActive"
            >
              Add date
            </button>
            <div v-if="isNewDateActive" class="store__add-date-btns">
              <button
                class="underline text-accent-dark p-3"
                @click="saveNewDate"
              >
                Save
              </button>
              <button class="underline text-accent-dark" @click="toggleNewDate">
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
          <div
            class="store__date"
            v-for="(date, index) in store.dates"
            :key="index"
          >
            <p>
              {{ date.formatted.date }}, {{ date.formatted.startTime }} -
              {{ date.formatted.endTime }}
            </p>
            <p class="store__date-remove">Remove</p>
          </div>
        </div>
        <hr class="w-full" />
        <div class="flex flex-col justify-start w-full mb-5">
          <div class="flex justify-between">
            <h4 class="text-xl">Items</h4>
            <button
              class="underline text-accent-dark"
              @click="$modal.show('newItemModal')"
            >
              Add
            </button>
          </div>
          <div class="store__items">
            <div class="store__item" v-for="item in items" :key="item.id">
              <router-link :to="'/stores/' + store._id + '/' + item._id">
                <img
                  class="store__item-thumbnail"
                  v-bind:src="'data:image/jpeg;base64,' + item.images[0].buffer"
                />
              </router-link>
              <div class="store__item-name">
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
import moment from "moment";
import Loader from "@/components/Loader.vue";
import NewDate from "@/components/NewDate.vue";
import EditButton from "@/components/EditButton.vue";
import NewItemModal from "@/components/NewItemModal.vue";
import setIndividual from "@/utils/individual";

export default {
  name: "Store",
  components: {
    Loader,
    NewDate,
    NewItemModal,
    EditButton,
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
      isEditingStore: false,
      isEditingLocation: false,
      isEditingDescription: false,
    };
  },
  async mounted() {
    this.individual = await setIndividual();
    this.getStore();
    this.getItems();
  },
  methods: {
    getStore() {
      axios.get(`stores/${this.$route.params.storeId}`).then((res) => {
        this.store = res.data;
        this.isLoading = false;
      });
    },
    getItems() {
      axios
        .get(
          `items?sortCriterion=0&type=0&storeId=${this.$route.params.storeId}`
        )
        .then((res) => {
          this.items = res.data;
          this.isLoading = false;
        });
    },
    toggleNewDate() {
      this.isNewDateActive = !this.isNewDateActive;
    },
    saveNewDate() {
      this.putDate();
      this.isNewDateActive = false;
    },
    toggleEdit(field, val) {
      this[field] = val;
    },
    putStore(data, field, val) {
      axios.put(`stores/${this.$route.params.storeId}`, data).then(() => {
        this.toggleEdit(field, val);
      });
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
        .put(`stores/${this.$route.params.storeId}`, { date })
        .then(() => this.store.dates.push(date));
    },
  },
};
</script>
