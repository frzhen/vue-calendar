<template>
  <div class="day-event" :style="getEventBackgroundColor">
    <div>
      <span class="has-text-centered details">{{ event.details }}</span>
      <div class="has-text-centered icons">
        <i class="fas fa-edit"></i>
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarEvent',
  props: ['event', 'day'],
  computed: {
    getEventBackgroundColor() {
      const colors = ['#E281EC', '#46cccd', '#00CA71'];
      let randomColor = colors[Math.floor(Math.random() * colors.length)]
      return `background-color: ${randomColor}`;
    }
  }

}
</script>

<style land="scss" scoped>
.day-event {
  margin-top: 6px;
  margin-bottom: 6px;
  display: block;
  color: #4C4C4C;
  padding: 5px;

  .details {
    display: block;
  }

  .icons .fas {
    padding: 0 2px;
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
</style>