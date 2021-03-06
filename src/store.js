import { reactive } from 'vue';
import { seedData } from "./seed.js";

export const store = {
  state: {
    data: reactive(seedData)
  },
  getActiveDay() {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.data.map((dayObj) => {
        dayObj.active = (dayId === dayObj.id);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ "details": eventDetails, "edit": false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvent();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  updateEvent(dayId, originalEventDetails, newEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = newEventDetails;
    eventObj.edit = false;
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.getDayObjById(dayId);
    const eventIndexToRemove = dayObj.events.findIndex(event => event.details === eventDetails);
    dayObj.events.splice(eventIndexToRemove, 1);
  },
  resetEditOfAllEvent() {
    this.state.data.map((dayObj) => {
      dayObj.events.map((event) => {
        event.edit = false;
      });
    });
  },
  getEventObj(dayId, eventDetails) {
    return this.getDayObjById(dayId).events.find((event) => event.details === eventDetails);
  },
  getDayObjById(dayId) {
      return this.state.data.find((day) => day.id === dayId);
  },
};
