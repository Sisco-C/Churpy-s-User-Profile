<template>
  <div class="theme-switcher">
    <label>
      <input type="radio" v-model="selectedTheme" value="blues">
      Blues
    </label>
    <label>
      <input type="radio" v-model="selectedTheme" value="pinks">
      Pinks
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTheme: 'blues',
    };
  },
  watch: {
    selectedTheme() {
      const icons = document.querySelectorAll('.large-icon');
      icons.forEach((icon) => {
        icon.classList.toggle('blue-icon', this.selectedTheme === 'blues');
        icon.classList.toggle('pink-icon', this.selectedTheme === 'pinks');
      });
    },
  },
};
</script>

<style>
.theme-switcher {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.theme-switcher label {
  margin-right: 10px;
}

.blue-icon {
  color: blue;
}

.pink-icon {
  color: pink;
}
</style>
