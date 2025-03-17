<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "vue2-datepicker/index.css";

export default {
  name: 'app',
  components: {
  },
};
</script>


<style>
#app {
  background-color: white;
  min-height: 100vh;
}
:root {
  /* --primary-color: #19A8A5BD; */
  --primary-color: #20b4b1;
}
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
