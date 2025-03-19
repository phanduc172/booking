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
  background-color: #f1f1f5;
  min-height: 100vh;
}
:root {
  --primary-color: #20b4b1;
}
html, body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>
