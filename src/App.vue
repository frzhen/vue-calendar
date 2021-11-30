<template>
  <div>
    <CalendarWeek />
    <CalendarEntry />
  </div>
</template>

<script>
import CalendarWeek from './components/CalendarWeek.vue'
import CalendarEntry from './components/CalendarEntry.vue'

export default {
  name: 'App',
  components: {
    CalendarWeek,
    CalendarEntry
  }
}

</script>

<style lang="scss">
  html, body {
    height: 100%;
    background: #6e6e6e;
  }
</style>

<style lang="scss" scoped>
#app {
    /* SCSS for app */
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
  }
</style>
