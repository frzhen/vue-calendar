<template>
  <div id="calendar-entry">
      <!-- Markup for calendar entry -->
      <div class="calendar-entry-note">
        <input type="text" placeholder="New Event" 
        v-model="inputEntry" 
        @keypress="enterKeySubmitEvent(inputEntry, $event)"
        required />
        <p class="calendar-entry-day">
          Day of event: 
          <span class="weekday">
            {{ titleOfActiveDay }}
          </span></p>
        <a class="button is-small submit" @click="submitEvent(inputEntry)" >Submit</a>
      </div>
      <p v-if="error" class="error">
        {{ error_message }}
      </p>
    </div>
</template>

<script>
import { store } from '../store.js';
import { errorMsg } from '../seed.js';

export default {
  name: 'CalendarEntry',
  data() {
    return {
      inputEntry: "",
      error: false,
      error_message: errorMsg,
    }
  },
  computed: {
    titleOfActiveDay() {
      return store.getActiveDay().fullTitle;
    }
  },
  methods: {
    enterKeySubmitEvent(eventDetails, e) {
      if (e.key === 'Enter') {
        this.submitEvent(eventDetails);
      }
    },
    submitEvent(eventDetails) {
      if (eventDetails === '') return this.error = true;

      store.submitEvent(eventDetails);
      this.inputEntry = "";
      this.error = false;
    },
  },
};
</script>

<style lang="scss" scoped>
  $submit-color: #fc8c3c;
  #calendar-entry {
    /* SCSS for calendar entry */
    background: #FFF;
    border: 1px solid #666;
    border-radius: 8px;
    max-width: 300px;
    margin: 0 auto;
    padding: 10px 20px;
    box-shadow: 2px 2px 5px 2px rgba(249,142,110,0.4);

    .calendar-entry-note {
      input {
        width: 200px;
        font-weight: 600;
        border: 0;
        border-bottom: 1px solid #CCC;
        font-size: 15px;
        height: 30px;
        margin-top: 20px;
        margin-bottom: 10px;

        &:focus {
          outline: none;
        }
      }

      .calendar-entry-day {
        color: #666;
        font-size: 12px;
        margin-bottom: 10px;
        padding-bottom: 5px;

        .weekday {
          margin-left: 40px;
          font-weight: 800;
          color: rgb(58,133,247);
        }
      }

      .submit {
        display: block;
        margin: 0 auto;
        background-color: $submit-color;
        border-radius: 5px;
        width: 100%;
        color: white;
      }
    }
    .error {
      color: red;
      font-size: 12px;
    }
  }
</style>
