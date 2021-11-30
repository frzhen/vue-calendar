<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div v-if="!event.edit">
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fas fa-edit" @click="editEventCursor(day.id, event.details)"></i>
        <i class="fas fa-trash-alt" @click="deleteEvent(day.id, event.details)"></i>
      </div>
    </div>
    <div v-if="event.edit">
      <input ref="editor" type="text" :placeholder="event.details" 
        v-model="newEventDetails" 
        @keypress.enter="updateEvent(day.id, event.details, newEventDetails)" />
      <div class="has-text-centered icons">
        <i class="fas fa-check" @click="updateEvent(day.id, event.details, newEventDetails)"></i>
      </div>
    </div>
    
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  data() {
    return {
      newEventDetails: "",
    }
  },
  computed: {
    getEventBackgroundColor() {
      const colors = ['#E281EC', '#46cccd', '#00CA71'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`;
    }
  },
  methods: {
    editEventCursor(dayId, eventDetails) {
      this.editEvent(dayId, eventDetails);
      this.$nextTick(() => {
        // const input = document.querySelector('#editor');
        const input = this.$refs.editor;
        input.focus();
        input.value = eventDetails;
        const len = eventDetails.length;
        input.setSelectionRange(len, len);
      });
    },
    editEvent(dayId, eventDetails) {
      store.editEvent(dayId, eventDetails);
    },
    updateEvent(dayId, originalEventDetails, updatedEventDetails) {
      if (updatedEventDetails === '') updatedEventDetails = originalEventDetails;
      store.updateEvent(dayId, originalEventDetails, updatedEventDetails);
      this.newEventDetails = '';
    },
    // the following code has beeen replaced by using vue key modifier
    // enterKeyUpdateEvent(dayId, originalEventDetails, updatedEventDetails, e) {
    //   if (e.key === 'Enter') {
    //     this.updateEvent(dayId, originalEventDetails, updatedEventDetails);
    //   } 
    // },
    deleteEvent(dayId, eventDetails) {
      store.deleteEvent(dayId, eventDetails);
    },
  }
}
</script>

<style lang="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;
  border-radius: 2px;

  .details {
    display: block;
  }

  .icons {
    margin-top: 5px;
  
    .fas {
      padding: 0 2px;
    }
  }

  input {
    background: none;
    border: 0;
    border-bottom: 1px solid #FFF;
    width: 100%;

    &:focus {
      outline: none;
    }
  }
}
.error {
  color: red;
  font-size: 12px;
}
</style>