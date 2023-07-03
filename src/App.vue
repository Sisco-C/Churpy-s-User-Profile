<template>
  <img alt="Vue logo" src="./assets/calendar.webp" class="calendar">
  <UserProfile />

</template>

<script>
import UserProfile from './components/UserProfile.vue';

export default {
  name: 'App',
  components: {
    UserProfile,
  }
}
</script>


<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.calendar {
    position: fixed;
    top: 0;
    right: 0;
    border-bottom-left-radius: 20px; /* Adjust the border radius as desired */

    width: 300px; /* Adjust the width value as desired */
    height: auto; /* Set height to auto to maintain aspect ratio */
  }
</style>
